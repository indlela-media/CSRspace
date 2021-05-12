import { ValuesOfCorrectTypeRule } from 'graphql';
import React from 'react'
import { useForm } from '../util/hooks';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../util/graphql';

export default function PostForm() {
    const { values, onChange, onSubmit } = useForm(createPostCallback, {
        name: '',
        summary: '',
        body: '',
        link: ''
    });

    const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: values,
        update(proxy, result){
            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY
            })
            data.getPosts = [result.data.createPost, ...data.getPosts]
            proxy.writeQuery({ query: FETCH_POSTS_QUERY, data })
            values.name = '';
            values.summary = '';
            values.body = '';
            values.link = '';
        }
    })

    function createPostCallback(){
        createPost()
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Create a listing</h3>
            <hr/>

            <h5>Title</h5>
            <input name="name" onChange={onChange} value={values.name}/> <br />

            <h5>Summary</h5>
            <input name="summary" onChange={onChange} value={values.summary}/> <br />

            <h5>Criteria</h5>
            <input name="body" onChange={onChange} value={values.body}/> <br />

            <h5>Google Form Link</h5>
            <input name="link" onChange={onChange} value={values.link}/> <br />
            
            <button type="submit">Submit</button> <br />
        </form>
    )
}

const CREATE_POST_MUTATION = gql`
mutation createPost($name: String! $summary: String! $body: String! $link: String!){
    createPost(name: $name, summary: $summary, body: $body, link: $link){
        id
        name
        summary
        body
        link
        createdAt
    }
}

`;
