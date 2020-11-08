import { getDefaultNormalizer } from '@testing-library/react'
import httpService from './httpService'
import {apiUrl} from "../config.json"

export function getData(){
    let response = httpService.get(apiUrl)
    if(response.success)
    {
        
    }
    return response;
}
