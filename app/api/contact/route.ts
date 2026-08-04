import { Resend } from "resend";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const partNumber = formData.get("partNumber") as string;
    const quantity = formData.get("quantity") as string;
    const message = formData.get("message") as string;

    const file = formData.get("attachment") as File | null;

    let fileUrl = "";

    // Upload customer file to Vercel Blob
    if (file && file.size > 0) {
      const blob = await put(file.name, file, {
        access: "public",
        addRandomSuffix: true,
      });

      fileUrl = blob.url;
    }

    const result = await resend.emails.send({
      from: "Tesseract Electronics <sales@tesseractelectronics.online>",
      to: "tesseractelectronics24@gmail.com",

      subject: `📩 New RFQ | ${service} | ${
        company || name
      }`,

      html: `
        <div style="font-family:Arial,sans-serif;background:#f4f7fb;padding:30px;">

          <div style="
            max-width:700px;
            margin:auto;
            background:#ffffff;
            border-radius:12px;
            padding:30px;
            box-shadow:0 5px 15px rgba(0,0,0,.08);
          ">

            <h1 style="color:#0284c7;margin-bottom:5px;">
              Tesseract Electronics
            </h1>

            <p style="color:#666;font-size:16px;">
              New Customer Quote Request
            </p>

            <hr style="margin:25px 0;">

            <table style="
              width:100%;
              border-collapse:collapse;
              font-size:15px;
            ">

              <tr>
                <td style="padding:8px;">
                  <strong>👤 Name</strong>
                </td>
                <td style="padding:8px;">
                  ${name || "-"}
                </td>
              </tr>

              <tr>
                <td style="padding:8px;">
                  <strong>🏢 Company</strong>
                </td>
                <td style="padding:8px;">
                  ${company || "-"}
                </td>
              </tr>

              <tr>
                <td style="padding:8px;">
                  <strong>📧 Email</strong>
                </td>
                <td style="padding:8px;">
                  ${email || "-"}
                </td>
              </tr>

              <tr>
                <td style="padding:8px;">
                  <strong>📞 Phone / WhatsApp</strong>
                </td>
                <td style="padding:8px;">
                  ${phone || "-"}
                </td>
              </tr>

              <tr>
                <td style="padding:8px;">
                  <strong>⚙ Requirement</strong>
                </td>
                <td style="padding:8px;">
                  ${service || "-"}
                </td>
              </tr>

              <tr>
                <td style="padding:8px;">
                  <strong>🔢 Part Number</strong>
                </td>
                <td style="padding:8px;">
                  ${partNumber || "-"}
                </td>
              </tr>

              <tr>
                <td style="padding:8px;">
                  <strong>📦 Quantity</strong>
                </td>
                <td style="padding:8px;">
                  ${quantity || "-"}
                </td>
              </tr>

            </table>

            <hr style="margin:25px 0;">

            <h3 style="color:#0284c7;">
              📝 Project / Requirement Details
            </h3>

            <p style="
              line-height:1.8;
              font-size:15px;
              white-space:pre-wrap;
            ">
              ${message || "-"}
            </p>

            ${
              fileUrl
                ? `
                  <hr style="margin:25px 0;">

                  <h3 style="color:#0284c7;">
                    📎 Customer Uploaded File
                  </h3>

                  <p>
                    <a
                      href="${fileUrl}"
                      target="_blank"
                      style="
                        background:#0284c7;
                        color:#ffffff;
                        padding:12px 20px;
                        border-radius:6px;
                        text-decoration:none;
                        display:inline-block;
                      "
                    >
                      Open Customer File
                    </a>
                  </p>

                  <p style="font-size:12px;color:#777;">
                    ${fileUrl}
                  </p>
                `
                : `
                  <p style="color:#777;font-size:14px;">
                    No file was uploaded with this enquiry.
                  </p>
                `
            }

            <hr style="margin:30px 0;">

            <p style="color:#777;font-size:13px;">
              <strong>Tesseract Electronics</strong><br>
              PCB Design • PCB Fabrication • PCB Assembly •
              Electronic Components
            </p>

          </div>

        </div>
      `,
    });

    if (result.error) {
      return NextResponse.json(
        {
          success: false,
          error: result.error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}