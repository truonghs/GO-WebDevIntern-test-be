import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ServiceJWT {
  constructor(private readonly jwtService: JwtService) {}

  async createConfirmationToken(email: string): Promise<string> {
    const payload = { email };
    return this.jwtService.signAsync(payload, {
      expiresIn: '15m',
    });
  }

  async validateToken(token: string): Promise<any> {
    try {
      return await this.jwtService.verifyAsync(token);
    } catch (e) {
      return null;
    }
  }
}
