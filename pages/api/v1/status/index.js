function status(request, response) {
  response.status(200).json({ chave: "valor que eu quiser acima da média" });
}
export default status;
// This API endpoint responds with a simple message indicating its status.
