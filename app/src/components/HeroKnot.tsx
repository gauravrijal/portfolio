import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Lissajous 2:1 figure-8 — loops at top & bottom, crossing at centre.
// Fully smooth parametric formula → stable Frenet frames → clean bead rings.
class RopeCurve extends THREE.Curve<THREE.Vector3> {
  private s: number
  constructor(scale: number) { super(); this.s = scale }
  getPoint(t: number): THREE.Vector3 {
    const a = t * Math.PI * 2
    return new THREE.Vector3(
      this.s * 0.78 * Math.sin(2 * a),  // horizontal bars through each loop
      this.s * 1.55 * Math.sin(a),       // vertical — big loops top and bottom
      this.s * 0.52 * Math.cos(a),       // depth — front / back at the crossing
    )
  }
}

const BG = '#F2F2F2'

export default function HeroKnot() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef  = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef     = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // ── Scene ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()
    scene.fog   = new THREE.Fog(0xf2f2f2, 13, 34)

    const camera = new THREE.PerspectiveCamera(
      83, container.clientWidth / container.clientHeight, 0.1, 100,
    )
    camera.position.set(0, 0, 17)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping         = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block'
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // ── Lighting ───────────────────────────────────────────────────────────
    scene.add(new THREE.HemisphereLight(0xffffff, 0xd0d0d0, 0.6))
    const key = new THREE.DirectionalLight(0xffffff, 1.4)
    key.position.set(8, 12, 8)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0xffffff, 0.4)
    fill.position.set(-10, 2, 6)
    scene.add(fill)
    const rim = new THREE.DirectionalLight(0xe0e8f0, 0.2)
    rim.position.set(0, -8, -6)
    scene.add(rim)

    // ── Rope geometry ──────────────────────────────────────────────────────
    const SCALE = 4.2
    const SEG   = 340
    const RING  = 11
    const TUBE  = 0.85
    const SR    = 0.22
    const TWIST = Math.PI * 4   // 2 full twists → braided rope look

    const curve  = new RopeCurve(SCALE)
    const pts    = curve.getPoints(SEG)
    const frames = curve.computeFrenetFrames(SEG, true)

    const geo = new THREE.SphereGeometry(SR, 16, 12)
    const mat = new THREE.MeshStandardMaterial({
      color:     0xf4f4f4,
      roughness: 0.18,
      metalness: 0.0,
    })

    const mesh = new THREE.InstancedMesh(geo, mat, SEG * RING)
    mesh.frustumCulled = false
    scene.add(mesh)

    const dummy = new THREE.Object3D()

    const updateRope = (phase: number) => {
      let idx = 0
      for (let i = 0; i < SEG; i++) {
        const c     = pts[i]
        const N     = frames.normals[i]
        const B     = frames.binormals[i]
        const twist = (i / SEG) * TWIST

        for (let r = 0; r < RING; r++) {
          const a  = (r / RING) * Math.PI * 2 + phase + twist
          const ca = Math.cos(a), sa = Math.sin(a)
          dummy.position.set(
            c.x + (N.x * ca + B.x * sa) * TUBE,
            c.y + (N.y * ca + B.y * sa) * TUBE,
            c.z + (N.z * ca + B.z * sa) * TUBE,
          )
          dummy.updateMatrix()
          mesh.setMatrixAt(idx++, dummy.matrix)
        }
      }
      mesh.instanceMatrix.needsUpdate = true
    }

    updateRope(0)

    // ── Animation ──────────────────────────────────────────────────────────
    let phase = 0
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      phase      += 0.005
      mesh.rotation.y += 0.0003
      updateRope(phase)
      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ─────────────────────────────────────────────────────────────
    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(frameRef.current)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
      <div ref={containerRef} style={{ position: 'absolute', inset: 0 }} />

      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `linear-gradient(to right, ${BG} 0%, ${BG}cc 8%, transparent 30%)`,
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `linear-gradient(to bottom, ${BG} 0%, transparent 22%)`,
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `linear-gradient(to top, ${BG} 0%, transparent 22%)`,
      }} />
    </div>
  )
}
