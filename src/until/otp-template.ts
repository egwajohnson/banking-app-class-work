export const otpTemplate = (name: string, otp: string) => {
  return `
        <html>
        
        <body>

            <h2> HELLO: ${name}: </h2>
            <br />
            <h2> THIS IS YOU OTP: ${otp} </h2>
        </body>
        <html>
        `;
};



