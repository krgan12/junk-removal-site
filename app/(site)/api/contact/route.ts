export async function POST(request: Request) {

    const body = await request.json();

    const {
        captchaToken,
        email,
        phoneNumber, 
        name, 
        message
    } = body;

    const verify = await fetch("https://hcaptcha.com/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            secret: process.env.HCAPTCHA_SECRET!,
            response: captchaToken,
        }),
    });

    const data = await verify.json();

    if (!data.success) {
        return Response.json(
            {error: "Captcha failed. "},
            {status: 400}
        )
    }

    if (data.success) {
        console.log(captchaToken, phoneNumber, name, email, message);
        return Response.json({
            success: true
        });
    }
}