const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config()
const generateContent = async(prompt)=>{
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//const prompt = "Write a story about a magic backpack.";

const result = await model.generateContent(prompt);
console.log(result.response.text());
}
generateContent("create an api for an ecommerce Application")