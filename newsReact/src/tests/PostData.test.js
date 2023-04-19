import React from "react"
import {render, screen} from '@testing-library/react'
import PostData from '../components/PostData.jsx'
import '@testing-library/jest-dom'

describe('First', () => {
    test('PostData and Comment', async () => {
        const addFavorite = (event) => {}
        const postData = {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            }
        const commentData = [{
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }]

        render(<PostData postData={postData} commentData={commentData} addFavorite={addFavorite} />)

        expect(screen.getByRole("title").textContent).toBe("qui est esse")
        expect(screen.getByRole("comment-title").textContent).toBe("id labore ex et quam laborum")
    })
});
