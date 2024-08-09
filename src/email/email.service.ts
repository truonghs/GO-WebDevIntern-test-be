import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import {
  confirmationEmail,
  successEmail,
  unsbscribeEmail,
} from 'utils/emailTemplates';

@Injectable()
export class EmailService {
  private transporter: any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendConfirmationEmail(email: string, token: string) {
    const confirmationUrl = `${process.env.CLIENT_URL}/email-confirm?token=${token}&email=${email}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Please confirm your subscription',
      html: confirmationEmail(confirmationUrl),
    };
    await this.transporter.sendMail(mailOptions);
  }
  async sendSuccessEmail(email: string, token: string) {
    const unsubscribeUrl = `${process.env.CLIENT_URL}/unsubscribe?email=${email}&token=${token}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Please confirm your subscription',
      html: successEmail(unsubscribeUrl),
    };
    await this.transporter.sendMail(mailOptions);
  }
  async sendUnsubscribeEmail(email: string, token: string) {
    const unsubscribeUrl = `${process.env.CLIENT_URL}/unsubscribe?email=${email}&token=${token}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Please confirm your Unsubscription',
      html: unsbscribeEmail(unsubscribeUrl),
    };
    await this.transporter.sendMail(mailOptions);
  }
  async sendDailyWeatherEmail(email: string, html: string) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Daily Weather Service',
      html: html,
    };
    await this.transporter.sendMail(mailOptions);
  }
}
