'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { getPost } from '@/services/api'
export default function Home() {
  const [posts, setPosts] = useState([]);

  const handleGetPost = async () => {
    const posts = await getPost();
    setPosts(posts);
  }

  useEffect(() => {
    handleGetPost();
  }, []);
  return (
    <main className={styles.main}>
    </main>
  )
}
