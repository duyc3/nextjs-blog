export async function getApiPath(){
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const post = [await res.json()]
    return post.map((post) => ({
        params:{id:post.node_id}
    }))
}


export async function getApiData(){
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    return await res.json()
}
    
