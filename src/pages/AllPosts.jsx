import React from 'react'
import { useGetAllPostsQuery } from '../features/api.slice'
import { useNavigate } from 'react-router-dom'

const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjExIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoic3R1ZGVudCIsImV4cCI6MTcwMDc0NTY1OX0.b2lKJb5B0WQme1_NOasArB_8DzEa4uTX0iQjDLuzaJtcKlx48WpyLFwfXNLfVzzzw7vy23kMSiQKJK-2spT2EA'
function AllPosts() {
    const navigate = useNavigate()
    const { data, refetch, isLoading, isError } = useGetAllPostsQuery({ token: token })

    if (isLoading) return <div>loading...</div>
    if (isError) return <div>oh no, an error!</div>

    return (
        <div>
            {data.map(post =>
                <p
                    key={post.id}
                    onClick={() => navigate(`/post/${post.id}`)}
                >
                    {post.title}
                </p>
            )}
        </div>
    )
}

export default AllPosts