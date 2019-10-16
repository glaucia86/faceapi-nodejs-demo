/**
 * arquivo: src/facedetection.js
 * Data: 16/10/019
 * Descrição: Arquivo responsável por realizar o reconhecimento facial usando o Face API & Node.js
 * Author: Glaucia Lemos
 */

'use strict';

const request = require('request');

require('dotenv').config();

const subscriptionKey = process.env.SUBSCRIPTION_FACE_API_KEY;
const uriBase = process.env.URI_BASE;
const imageUrl = 'https://cdn-ofuxico.akamaized.net/img/upload/noticias/2019/05/13/silvio_santos_reproducao_instagram_349201_36.jpg';