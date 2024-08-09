import { WeatherDto } from 'src/weather/weather.dto';

const confirmationEmail = (url: string): string => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Weather Subscription</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              background-color: #007BFF;
              color: #ffffff;
              padding: 10px 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
          }
          .content {
              padding: 20px;
              line-height: 1.6;
              background-color: #e3f2fd;

          }
          .button {
              display: inline-block;
              padding: 10px 20px;
              margin: 10px 0;
              font-size: 16px;
              color: #fff;
              background-color: #007BFF;
              border-radius: 4px;
              text-decoration: none;
          }
          .footer {
              padding: 10px;
              text-align: center;
              font-size: 14px;
              color: #888888;
              background-color: #e3f2fd;

          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>Weather Subscription</h1>
          </div>
          <div class="content">
              <p>Dear Subscriber,</p>
              <p>Thank you for showing interest in receiving daily weather updates from us. To complete your subscription, please click the button below to confirm your email address:</p>
              <a href="${url}"><div class="button">Confirm Subscription</div></a>
              <p>If you did not request this subscription, please ignore this email.</p>
              <p>Best regards,<br>Weather Team</p>
          </div>
          <div class="footer">
              <p>&copy; 2024 Weather Company. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>`;
};
const successEmail = (url: string): string => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subscription Confirmed</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #28a745;
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            padding: 20px;
            line-height: 1.6;
            background-color: #e3fdeb;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px 0;
            font-size: 16px;
            color: #ffffff;
            background-color: red;
            border-radius: 4px;
            text-decoration: none;
        }
        .footer {
            padding: 10px;
            text-align: center;
            font-size: 14px;
            color: #888888;
            background-color: #e3fdeb;

        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Subscription Confirmed</h1>
        </div>
        <div class="content">
            <p>Dear Subscriber,</p>
            <p>Your subscription to daily weather updates has been successfully confirmed. Thank you for subscribing!</p>
            <p>If you wish to unsubscribe from the service at any time, you can click the button below:</p>
            <a href="${url}"><div class="button">Unsubscribe</div></a>
            <p>If you have any questions or need further assistance, feel free to contact us.</p>
            <p>Best regards,<br>Weather Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Weather Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
};
const unsbscribeEmail = (url: string): string => {
  return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Subscription Confirmed</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              background-color: #28a745;
              color: #ffffff;
              padding: 10px 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
          }
          .content {
              padding: 20px;
              line-height: 1.6;
              background-color: #e3fdeb;
          }
          .button {
              display: inline-block;
              padding: 10px 20px;
              margin: 10px 0;
              font-size: 16px;
              color: #ffffff;
              background-color: red;
              border-radius: 4px;
              text-decoration: none;
          }
          .footer {
              padding: 10px;
              text-align: center;
              font-size: 14px;
              color: #888888;
              background-color: #e3fdeb;
  
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>Subscription Confirmed</h1>
          </div>
          <div class="content">
              <p>Dear Subscriber,</p>
              <p>If you wish to unsubscribe from the service, please click the button below:</p>
              <a href="${url}"><div class="button">Unsubscribe</div></a>
              <p>If you have any questions or need further assistance, feel free to contact us.</p>
              <p>Best regards,<br>Weather Team</p>
          </div>
          <div class="footer">
              <p>&copy; 2024 Weather Company. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
  `;
};
const dailyEmail = (weather: WeatherDto): string => {
  return;
  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Subscription Confirmed</title>
        <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              background-color: #007BFF;
              color: #ffffff;
              padding: 10px 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
          }
          .content {
              padding: 20px;
              line-height: 1.6;
              background-color: #e3f2fd;

          }
          .weather {
              display: flex;
              justify-content:space-between;
              padding: 10px 20px;
              margin: 10px 0;
              font-size: 16px;
              color: #fff;
              background-color: #007BFF;
              border-radius: 4px;
              text-decoration: none;
          }
          .footer {
              padding: 10px;
              text-align: center;
              font-size: 14px;
              color: #888888;
              background-color: #e3f2fd;

          }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Today Weather</h1>
            </div>
            <div class="content">
                <p>Dear Subscriber,</p>
                <p>Here is the current weather in your area!</p>
                <div class="weather">
                    <div>
                        <div>${weather?.location?.name}</div>
                        <div>
                            <div>Temperature: ${weather.current.temp_c} C</div>
                            <div >Wind:${Math.round((weather?.current?.wind_kph / 3.6) * 100) / 100} M/S</div>
                            <div>Humidity: ${weather?.current?.humidity} %</div>
                        </div>
                        
                    </div>
                    <div >
                      <img src={} ></img>
                    </div>
                </div>
                <p>Best regards,<br>Weather Team</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Weather Company. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};
export { confirmationEmail, successEmail, dailyEmail, unsbscribeEmail };
