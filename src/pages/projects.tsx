import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Content from '../components/MainPage/Content'

const Projects = () => {
  const { asPath } = useRouter()
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{ smooth: true, lerp: 0.05 }}
      containerRef={containerRef}
      watch={[]}>
      <div data-scroll-container>
        <div data-scroll-section >
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Key</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Key</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '64px' }}>Lol</h1>
          </div>
        </div>
      </div>
    </LocomotiveScrollProvider>
  )
}

export default Projects
