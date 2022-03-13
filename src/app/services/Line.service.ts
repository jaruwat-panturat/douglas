import credentials from '../../../assets/credentials.json';
import axios from 'axios';

export class LineService {

    lineUrl = "https://notify-api.line.me/api/notify";
    lineHeader = {
        'Authorization': 'Bearer '+credentials.line.lineToken,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    sendPush(msg: string) {
        const params = new URLSearchParams()
        params.append('message', msg);

        axios.post(this.lineUrl, params,
            {
                headers: this.lineHeader,
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            }).then(function () {
        });  
    }
}