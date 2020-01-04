import React from 'react';
import { controllers } from 'tramway-router-react-strategy';
import { NotFound } from '../components/pages';
const {NotFoundController} = controllers;

export default class PageNotFoundController extends NotFoundController {
    constructor(props) {
        super(props);
    }

    render() {
        return <NotFound/>
    }
}
