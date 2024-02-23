function Contact() {
  return (
    <>
      <h1 className="text-center">Contact Me</h1>

      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="45ea0a30-6748-4a2f-b94b-e69469fa4e0b"></input>

        <input name="name" type="text" placeholder="Enter your Full Name" />
        <input name="email" type="email" placeholder="Enter your email address" />
        <textarea name="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
        <input type="hidden" name="redirect" value="https://jdtadlock.com"></input>
        <button>Send</button>
      </form>
    </>
  )
}

export default Contact