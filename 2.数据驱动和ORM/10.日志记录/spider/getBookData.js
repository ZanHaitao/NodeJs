const axios = require('axios');
const cheerio = require('cheerio');
const Book = require('../models/Book');

/**
 * 获取图书HTML页面
 */
async function getBookHTML(){
    const resp = await axios.get("https://book.douban.com/latest");
    return cheerio.load(resp.data);
}

/**
 * 获取图书链接数组
 */
async function getBookLinks(){
    const $ = await getBookHTML();
    const aElements = $("#content .grid-12-12 li a.cover");
    return aElements.map((i,e)=>{
        return $(e).attr('href')
    }).toArray();
}

/**
 * 获取图书信息
 * @param {*} link 图书链接地址
 */
async function getBookDetail(link){
    const resp = await axios.get(link);
    const $ = cheerio.load(resp.data);
    const bookName = $('h1 span').text();
    const author = $('span.pl').filter((i,e)=>{
        return $(e).text().includes('作者');
    }).next().text();
    const publishDate = $('span.pl').filter((i,e)=>{
        return $(e).text().includes('出版年');
    })[0].nextSibling.nodeValue.trim();
    const imgUrl = $('#mainpic img').attr('src');
    return {
        publishDate,
        author,
        bookName,
        imgUrl
    }
}

/**
 * 获取全部数据
 */
async function setDataBase(){
    const links = await getBookLinks();
    const promiseLinks = links.map((e,i)=>{
        return getBookDetail(e);
    })
    const data = await Promise.all(promiseLinks);
    await Book.bulkCreate(data);
    console.log("获取数据成功");
}

setDataBase();