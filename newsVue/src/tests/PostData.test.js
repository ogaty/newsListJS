import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PostDataComponent from "../components/PostDataComponent.vue";

describe('Hi', () => {
    it('should works', () => {
        const wrapper = mount(PostDataComponent, { props: {
                postData:
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    },
                commentData:[
                    {
                        "postId": 1,
                        "id": 1,
                        "name": "id labore ex et quam laborum",
                        "email": "Eliseo@gardner.biz",
                        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                    },
                    {
                        "postId": 1,
                        "id": 2,
                        "name": "quo vero reiciendis velit similique earum",
                        "email": "Jayne_Kuhic@sydney.com",
                        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                    }]
            }})
        expect(wrapper.find(".title").text()).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
        expect(wrapper.findAll(".comment-data").length).toEqual(2)
    })
})
