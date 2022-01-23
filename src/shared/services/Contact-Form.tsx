import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export async function SubmitContactForm(data: any) {
  try {
    const url = `${publicRuntimeConfig.apiGateway}/v1/contact-form`;
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
}
