import React from "react"
import {render, screen, within} from '@testing-library/react'
import FavoriteList from '../components/FavoriteList.jsx'

describe('First', () => {
    test('FavoriteList count', async () => {
        const handleClick = (event) => {}
        const favorites = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            }
        ]
        render(<FavoriteList favorite={favorites} handleClick={handleClick} />)

        const list = screen.getByRole("list")
        const { getAllByRole } = within(list)
        const items = getAllByRole("listitem")
        expect(items.length).toBe(2)
    })
});
