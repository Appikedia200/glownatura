import { apiClient, ApiResponse } from '../client';

export interface WhatsAppSettings {
  number: string;
  showFloatButton: boolean;
  floatPosition: 'left' | 'right';
  welcomeMessage: string;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
}

export interface PublicSettings {
  whatsapp: WhatsAppSettings;
  socialMedia: SocialMedia;
}

export const settingsService = {
  async getPublicSettings(): Promise<ApiResponse<PublicSettings>> {
    const response = await apiClient.get<ApiResponse<PublicSettings>>('/api/settings/public');
    return response.data;
  },
};

