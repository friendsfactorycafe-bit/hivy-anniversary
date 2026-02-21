'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Phone, User, Heart, Gift, MessageCircle, X, Loader2, CheckCircle, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { siteConfig, getVisiblePackages, packages } from '@/lib/ffc-config';

// localStorage key for form persistence
const FORM_STORAGE_KEY = 'hivy_booking_form_data';

// Form validation schema
const ffcBookingSchema = z.object({
  yourName: z.string().min(2, 'Name must be at least 2 characters'),
  partnerName: z.string().min(2, 'Partner name must be at least 2 characters'),
  phone: z.string().min(10, 'Enter valid 10-digit phone number').max(10, 'Enter valid 10-digit phone number').regex(/^[6-9]\d{9}$/, 'Enter valid Indian mobile number'),
  city: z.string().min(1, 'Please enter your city'),
  occasionDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select preferred time'),
  occasion: z.string().min(1, 'Please select your moment'),
  selectedPackage: z.string().optional(),
});

type FFCBookingFormData = z.infer<typeof ffcBookingSchema>;

// Moment/Occasion options
const momentOptions = [
  { value: 'birthday', label: 'Birthday Celebration' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'proposal', label: 'Proposal / Ring Ceremony' },
  { value: 'candlelight-dinner', label: 'Candlelight Dinner' },
  { value: 'surprise', label: 'Surprise Date' },
  { value: 'pre-wedding-shoot', label: 'Pre-Wedding Shoot' },
  { value: 'baby-moments', label: 'Baby Moments (Pregnancy Announcement)' },
  { value: 'other', label: 'Other Special Occasion' },
];

// Time slots
const timeSlots = [
  { value: 'lunch-12-3', label: '12 PM to 3 PM (Lunch)' },
  { value: 'lunch-1-4', label: '1 PM to 4 PM (Lunch)' },
  { value: 'lunch-2-5', label: '2 PM to 5 PM (Lunch)' },
  { value: 'evening-4-7', label: '4 PM to 7 PM (Evening)' },
  { value: 'evening-5-8', label: '5 PM to 8 PM (Evening)' },
  { value: 'evening-6-9', label: '6 PM to 9 PM (Evening)' },
  { value: 'dinner-7-10', label: '7 PM to 10 PM (Dinner)' },
  { value: 'dinner-730-1030', label: '7:30 PM to 10:30 PM (Dinner)' },
  { value: 'dinner-8-11', label: '8 PM to 11 PM (Dinner)' },
];

// Helper: save form data to localStorage
function saveFormData(data: Partial<FFCBookingFormData>) {
  try {
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

// Helper: load form data from localStorage
function loadFormData(): Partial<FFCBookingFormData> | null {
  try {
    const stored = localStorage.getItem(FORM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

// Helper: clear stored form data
function clearFormData() {
  try {
    localStorage.removeItem(FORM_STORAGE_KEY);
  } catch {}
}

// Helper: strip leading 0 from phone
function sanitizePhone(val: string): string {
  let cleaned = val.replace(/\D/g, '');
  if (cleaned.startsWith('0')) cleaned = cleaned.substring(1);
  if (cleaned.startsWith('91') && cleaned.length > 10) cleaned = cleaned.substring(2);
  return cleaned.substring(0, 10);
}

interface FFCBookingFormProps {
  pageTitle?: string;
  variant?: 'default' | 'hero' | 'sidebar' | 'modal';
  packageName?: string;
  defaultPackageSlug?: string;
  onClose?: () => void;
}

export function FFCBookingForm({ pageTitle, variant = 'default', packageName, defaultPackageSlug, onClose }: FFCBookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPkgSlug, setSelectedPkgSlug] = useState(defaultPackageSlug || '');

  // Load persisted data for default values
  const getDefaults = useCallback(() => {
    const stored = loadFormData();
    return {
      yourName: stored?.yourName || '',
      partnerName: stored?.partnerName || '',
      phone: stored?.phone || '',
      city: stored?.city || 'Surat',
      occasionDate: stored?.occasionDate || '',
      preferredTime: stored?.preferredTime || '',
      occasion: stored?.occasion || '',
      selectedPackage: defaultPackageSlug || stored?.selectedPackage || '',
    };
  }, [defaultPackageSlug]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FFCBookingFormData>({
    resolver: zodResolver(ffcBookingSchema),
    defaultValues: getDefaults(),
  });

  // Watch all form values for persistence
  const watchedValues = watch();

  // Persist form data on every change
  useEffect(() => {
    const timeout = setTimeout(() => {
      saveFormData(watchedValues);
    }, 300);
    return () => clearTimeout(timeout);
  }, [watchedValues]);

  // On mount, restore Select-based fields from localStorage
  useEffect(() => {
    const stored = loadFormData();
    if (stored) {
      if (stored.selectedPackage) {
        setSelectedPkgSlug(stored.selectedPackage);
        setValue('selectedPackage', stored.selectedPackage);
      }
      if (stored.occasion) setValue('occasion', stored.occasion);
      if (stored.preferredTime) setValue('preferredTime', stored.preferredTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Generate WhatsApp message
  const generateWhatsAppMessage = (data: FFCBookingFormData): string => {
    const occasionLabel = momentOptions.find(o => o.value === data.occasion)?.label || data.occasion;
    const timeLabel = timeSlots.find(t => t.value === data.preferredTime)?.label || data.preferredTime;
    const selectedPkg = data.selectedPackage ? packages.find(p => p.slug === data.selectedPackage) : null;
    
    let message = `*New Booking Inquiry - HIVY Anniversary*\n\n`;
    message += `*Your Name:* ${data.yourName}\n`;
    message += `*Partner's Name:* ${data.partnerName}\n`;
    message += `*Phone:* +91 ${data.phone}\n`;
    message += `*City:* ${data.city}\n`;
    message += `*Date:* ${data.occasionDate}\n`;
    message += `*Preferred Time:* ${timeLabel}\n`;
    message += `*Occasion:* ${occasionLabel}\n`;
    
    if (selectedPkg) {
      message += `\n*Selected Package:* ${selectedPkg.name} (Rs.${selectedPkg.price.toLocaleString('en-IN')})\n`;
    } else if (packageName) {
      message += `\n*Package:* ${packageName}\n`;
    }
    
    if (pageTitle) {
      message += `\n*Interested In:* ${pageTitle}\n`;
    }
    
    message += `\nLooking forward to creating beautiful memories!`;
    
    return encodeURIComponent(message);
  };

  const onSubmit = async (data: FFCBookingFormData) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const whatsappMessage = generateWhatsAppMessage(data);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Clear stored data only after successful submission
    clearFormData();
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      reset();
      if (onClose) onClose();
    }, 3000);
  };

  const today = new Date().toISOString().split('T')[0];

  if (isSuccess) {
    return (
      <Card className={`${variant === 'modal' ? '' : 'shadow-lg'}`}>
        <CardContent className="py-12 text-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-purple-100">
            <CheckCircle className="h-8 w-8 text-purple-800" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Booking Request Sent!</h3>
          <p className="text-muted-foreground">
            We've opened WhatsApp for you. Complete your booking there!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${variant === 'modal' ? 'border-0 shadow-none' : 'shadow-lg'} ${variant === 'hero' ? 'bg-white/60 backdrop-blur-md border-white/20' : ''} overflow-hidden`}>
      {variant !== 'modal' && (
        <div className={`${variant === 'hero' ? 'bg-gradient-to-r from-purple-800/95 to-violet-700/95' : 'bg-gradient-to-r from-purple-800 to-violet-700'} p-4 text-white`}>
          <CardTitle className="text-xl flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Reserve Your Moment
          </CardTitle>
          <CardDescription className="text-white/80 mt-1">
            Fill in details & we'll contact you on WhatsApp
          </CardDescription>
        </div>
      )}
      
      {variant === 'modal' && onClose && (
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <CardTitle className="text-xl text-purple-800">Reserve Now</CardTitle>
            <CardDescription>Get instant confirmation on WhatsApp</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
      
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Fields - Your Name & Partner Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="yourName" className="flex items-center gap-2">
                <User className="h-4 w-4 text-purple-800" />
                Your Name *
              </Label>
              <Input
                id="yourName"
                placeholder="Your name"
                {...register('yourName')}
                className={errors.yourName ? 'border-red-500' : ''}
              />
              {errors.yourName && (
                <p className="text-red-500 text-sm">{errors.yourName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="partnerName" className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-purple-800" />
                Partner's Name *
              </Label>
              <Input
                id="partnerName"
                placeholder="Partner's name"
                {...register('partnerName')}
                className={errors.partnerName ? 'border-red-500' : ''}
              />
              {errors.partnerName && (
                <p className="text-red-500 text-sm">{errors.partnerName.message}</p>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-purple-800" />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 9727027278"
              maxLength={10}
              {...register('phone', {
                onChange: (e) => {
                  e.target.value = sanitizePhone(e.target.value);
                }
              })}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* City Field */}
          <div className="space-y-2">
            <Label htmlFor="city" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-purple-800" />
              City *
            </Label>
            <Input
              id="city"
              placeholder="Enter your city"
              {...register('city')}
              className={errors.city ? 'border-red-500' : ''}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          {/* Package & Moment Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Package Selection Field with View Details */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm font-medium">
                📦 Package
              </Label>
              <Select 
                defaultValue={defaultPackageSlug || selectedPkgSlug}
                value={selectedPkgSlug}
                onValueChange={(value) => {
                  setSelectedPkgSlug(value);
                  setValue('selectedPackage', value);
                }}
              >
                <SelectTrigger className="w-full text-xs sm:text-sm h-auto min-h-[40px] whitespace-normal">
                  <SelectValue placeholder="Select package" />
                </SelectTrigger>
                <SelectContent className="max-w-[calc(100vw-2rem)]">
                  {getVisiblePackages().map((pkg) => (
                    <SelectItem key={pkg.slug} value={pkg.slug} className="text-xs sm:text-sm">
                      <span className="flex items-center gap-1 flex-wrap">
                        <span>{pkg.emoji} {pkg.name} — ₹{pkg.price.toLocaleString('en-IN')}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* View Details button */}
              {selectedPkgSlug && (
                <div className="flex justify-end mt-1">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-purple-800 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-full px-2.5 py-0.5 transition-colors font-medium cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Save form data before navigating
                      saveFormData(watchedValues);
                      window.open(`/packages/${selectedPkgSlug}`, '_blank');
                    }}
                  >
                    View Details <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>

            {/* Occasion Field */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Gift className="h-4 w-4 text-purple-800" />
                Your Moment *
              </Label>
              <Select 
                defaultValue={watchedValues.occasion}
                onValueChange={(value) => setValue('occasion', value)}
              >
                <SelectTrigger className={`w-full text-xs sm:text-sm ${errors.occasion ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select moment" />
                </SelectTrigger>
                <SelectContent>
                  {momentOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.occasion && (
                <p className="text-red-500 text-sm">{errors.occasion.message}</p>
              )}
            </div>
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Date Field */}
            <div className="space-y-2">
              <Label htmlFor="occasionDate" className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="h-4 w-4 text-purple-800" />
                Select Date *
              </Label>
              <Input
                id="occasionDate"
                type="date"
                min={today}
                {...register('occasionDate')}
                className={`w-full ${errors.occasionDate ? 'border-red-500' : ''}`}
              />
              {errors.occasionDate && (
                <p className="text-red-500 text-sm">{errors.occasionDate.message}</p>
              )}
            </div>

            {/* Time Slot Field */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4 text-purple-800" />
                Preferred Time *
              </Label>
              <Select 
                defaultValue={watchedValues.preferredTime}
                onValueChange={(value) => setValue('preferredTime', value)}
              >
                <SelectTrigger className={`w-full text-xs sm:text-sm ${errors.preferredTime ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot.value} value={slot.value}>
                      {slot.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.preferredTime && (
                <p className="text-red-500 text-sm">{errors.preferredTime.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-800 to-violet-700 hover:from-purple-900 hover:to-purple-800 text-white py-5 text-base font-semibold mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <MessageCircle className="h-5 w-5 mr-2" />
                Lock Your Date - Message on WhatsApp
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

// WhatsApp Floating Button with Form Modal
export function FFCWhatsAppFloat({ pageTitle }: { pageTitle?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Pre-written WhatsApp message (using WhatsApp bold formatting with *text*)
  const preWrittenMessage = encodeURIComponent(
    `*Hi HIVY!*\n\nI'm interested in booking a romantic celebration at your venue.\n\n*I'd like to know more about:*\n- Candlelight dinner packages\n- Birthday surprise setups\n- Anniversary celebration options\n- Available dates & pricing\n\nPlease share the details. Thank you!`
  );

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${preWrittenMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 group"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
        </a>
      </div>
    </>
  );
}

// Book Now Button with Modal
export function FFCBookNowButton({ pageTitle, packageName, packageSlug, className }: { pageTitle?: string; packageName?: string; packageSlug?: string; className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={`bg-gradient-to-r from-purple-800 to-violet-700 hover:from-purple-900 hover:to-purple-800 text-white ${className}`}>
          <Gift className="h-5 w-5 mr-2" />
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-0">
        <FFCBookingForm 
          variant="modal" 
          pageTitle={pageTitle} 
          packageName={packageName}
          defaultPackageSlug={packageSlug}
          onClose={() => setIsOpen(false)} 
        />
      </DialogContent>
    </Dialog>
  );
}
