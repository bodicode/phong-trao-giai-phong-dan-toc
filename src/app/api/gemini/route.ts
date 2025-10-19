import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1]?.content || "";

    const lowerMsg = userMessage.toLowerCase();
    const relatedKeywords = [
      "cách mạng tháng tám",
      "giải phóng dân tộc",
      "đảng cộng sản",
      "hồ chí minh",
      "việt minh",
      "đông dương",
      "phát xít nhật",
      "pháp",
      "1939",
      "1940",
      "1941",
      "1945",
      "khởi nghĩa",
      "tân trào",
      "pác bó",
      "bắc sơn",
      "nam kỳ",
      "đô lương",
      "tuyên ngôn độc lập",
    ];

    const isRelated = relatedKeywords.some((kw) => lowerMsg.includes(kw));

    if (!isRelated) {
      return NextResponse.json({
        reply:
          "Xin lỗi, câu hỏi của bạn không nằm trong phạm vi kiến thức của tôi. Tôi chỉ hỗ trợ các chủ đề liên quan đến **lịch sử Việt Nam giai đoạn 1939–1945**, như: Đảng Cộng sản Đông Dương, phong trào Việt Minh, khởi nghĩa Tháng Tám, hay Chủ tịch Hồ Chí Minh.",
      });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const context = `
Bạn là Trợ lý Giải Phóng AI – hướng dẫn viên lịch sử Việt Nam chuyên về giai đoạn 1939–1945.
Trả lời bằng tiếng Việt, giọng học thuật, rõ ràng, ngắn gọn, không lan man.

Chỉ tập trung vào các sự kiện:
- Hội nghị Trung ương VI (11/1939 – Bà Điểm, Gia Định)
- Hội nghị Trung ương VIII (5/1941 – Pác Bó, Cao Bằng)
- Việt Minh, phong trào khởi nghĩa Bắc Sơn, Nam Kỳ, Đô Lương
- Cao trào kháng Nhật cứu nước (1945)
- Tổng khởi nghĩa Tháng Tám (1945)
- Ngày 2/9/1945 – Tuyên ngôn độc lập
- Tính chất và ý nghĩa của Cách mạng Tháng Tám

Nếu người dùng hỏi ngoài phạm vi đó, chỉ cần nói rằng: 
“Xin lỗi, tôi chỉ hỗ trợ kiến thức lịch sử Việt Nam giai đoạn 1939–1945.”
`;

    const prompt = `${context}\n\nCâu hỏi: ${userMessage}`;
    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (err: unknown) {
    console.error("Gemini API error:", err);
    return NextResponse.json(
      {
        reply:
          "Xin lỗi nha, tôi chỉ có thể trả lời về lịch sử Việt Nam giai đoạn 1939–1945 thôi đó! Hãy thử hỏi tôi về Cách mạng Tháng Tám hay Việt Minh nhé.",
      },
      { status: 500 }
    );
  }
}
