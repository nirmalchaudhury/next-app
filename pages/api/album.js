import axios from "axios";

export default function handler(req, res) {


    let data
    const call = async () => {
        const response = await axios.get(
          "https://photos.app.goo.gl/V9ZKFhtdnLPhmVYx9"
        );

        let content = response.data

        const regex = /"(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

        const links = []
        let match
        while (match = regex.exec(content)) {
            links.push(match[1])
        }

        
        links.pop()
        links.pop()
        links.pop()

        data = response.data

        res.status(200).json(links)
    }
    call()
    // res.status(200).json(data)
  }
  