import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, serviceInterest, note } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, message: 'Vui lòng cung cấp đầy đủ Họ tên và Số điện thoại.' },
        { status: 400 }
      );
    }

    // Ghi log thông tin đăng ký tư vấn
    console.log('[LEAD SUBMISSION RECEIVED]:', {
      timestamp: new Date().toISOString(),
      fullName,
      phone,
      serviceInterest: serviceInterest || 'Tư vấn tổng quát',
      note: note || '',
    });

    // Tại đây có thể dễ dàng gắn webhook Telegram, Zalo ZNS, Google Sheet hoặc CRM
    return NextResponse.json({
      success: true,
      message: 'Đăng ký tư vấn thành công! Chuyên gia Toàn T&T Spa sẽ liên hệ sớm nhất.',
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Đã có lỗi xảy ra. Vui lòng liên hệ trực tiếp qua hotline.' },
      { status: 500 }
    );
  }
}

