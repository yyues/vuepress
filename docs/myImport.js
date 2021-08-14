const path = require('path')
const fs = require('fs')
const myUrl = url => {
  return path.resolve(__dirname, url)
}
const data = fs.readdirSync(myUrl('../docs'))

const returnDir = list => {
  // 读取docs文件夹下 是 文件夹的数据
  let arr = []
  list.forEach(element => {
    const myPath = '../docs/' + element
    if (fs.lstatSync(myUrl(myPath)).isDirectory() && element !== '.vuepress') {
      arr.push(element)
    }
  })
  return arr
}

let fileList = returnDir(data)

const returnMdFile = (list, dir) => {
  // 根据docs下满足条件的目录，获取 指定dir(目录)下满足条件的  .md   文件
  let arr = []
  list.forEach(element => {
    const myPath = '../docs/' + dir + '/' + element
    if (
      fs.lstatSync(myUrl(myPath)).isFile() &&
      element.includes('.md') &&
      element !== 'README.md'
    ) {
      arr.push(handleFormatData(dir, element))
    }
  })
  return arr
}
const handleFormatData = (dirName, text) => {
  /**
   * @params dirName 文件夹目录 必选
   * @params text 文本值，相当于页面标题 必选
   */
  // 二级路由处理模式  `${text.replace('.md', '')}`
  let myText = text == 'README.md' ? `${dirName}` : `${text}`
  let myLink = text == 'README.md' ? `/${dirName}/` : `/${dirName}/${myText}`
  let children = {
    text: myText,
    link: myLink
  }
  return children
}

let exportData = []

for (const item of fileList) {
  const filePath = '../docs/' + item
  const data = fs.readdirSync(myUrl(filePath))
  let children = returnMdFile(data, item)
  let list = {
    text: `${item}`,
    link: `/${item}/README.md`,
    children
  }
  exportData.push(list)
}

module.exports = exportData
