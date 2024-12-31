const axios = require('axios');

async function verifyRecaptcha(req, res) {
  const secretKey = '6LddcpEqAAAAAHNOi5qDeuKaxVFXzhVU6t033zeI'; // Replace with your reCAPTCHA secret key
  const token = req.body.token; // The token sent from the client-side

  if (!token) {
    return res.status(400).json({ success: false, message: "No token provided" });
  }

  try {
    // Send POST request to Google's API
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    const { success, score } = response.data;

    if (success) {
      // Optionally, check the score for reCAPTCHA v3
      if (score && score < 0.5) {
        return res.status(400).json({
          success: false,
          message: 'Low reCAPTCHA score, likely a bot.',
        });
      }
      return res.status(200).json({ success: true, message: 'Verification passed' });
    } else {
      return res.status(400).json({ success: false, message: 'Verification failed' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}
