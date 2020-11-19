import { useRouter } from 'next/router'

const  GameNews = () => {
    const router = useRouter()
    const { slug } = router.query

return (<h1>This is about {slug}</h1>)
}

export default GameNews;