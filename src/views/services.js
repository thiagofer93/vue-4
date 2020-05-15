import "dayjs/locale/pt-br";

import { api } from "env";
import axios from "axios";
import dayjs from "dayjs";

export const getThreads = () => {
  return axios.get(api, { headers: { accept: "application/json" } }).then(({data}) => data.data.map((data) => ({...data, formatedCreatedAt: dayjs(data.createdAt).locale('pt_br').format("DD/MM/YYYY, hh:mm:ss A")})));
};


export const getThread = threadSlug => {
    let url = `${api}/${threadSlug}`

    return axios.get(url, { headers: { accept: "application/json" } }).then(({data}) => ({ ...data.data, formatedCreatedAt: dayjs(data.data.createdAt).locale('pt_br').format("DD/MM/YYYY, hh:mm:ss A") }));
  };
  