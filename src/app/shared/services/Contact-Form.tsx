import axios from "axios";

export async function SubmitContactForm(data: any) {
  try {
    const url = `${process.env.apiGateway}/v1/contact-form`;
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
}
