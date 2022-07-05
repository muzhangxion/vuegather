let readFile = (file: any) => {
    return new Promise(resolve => {
        let reader = new FileReader()
        reader.readAsBinaryString(file)
        reader.onload = ev => {
            resolve((ev as any).target.result)
        }
    })
}
export default readFile;