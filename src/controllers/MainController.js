import { Dashboard } from '../components/pages';
import {controllers} from 'tramway-core-react';
import { Controller } from 'tramway-core-router';
const {ReactController} = controllers;

export default class MainController extends Controller {
    async index(req, res, next) {
        return ReactController.render(res, Dashboard, {message: "Something"})
    }
}