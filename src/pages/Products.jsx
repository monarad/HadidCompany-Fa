import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

function Products() {
   const title = "محصولات |  خدمات برش لیزر فلزات";
   const description =
    "ارائه دهنده خدمات برش لیزر فلزات با بالاترین کیفیت.";
  return (
    <>
      <Helmet>
        <title>{title.slice(0, 60)}</title>
        <meta name="description" content={description.slice(0, 160)} />
      </Helmet>
      <div className="w-full h-auto px-4 py-6  mt-10 flex flex-col items-center justify-center text-center sm:px-2 sm:py-2 sm:mt-20 ">
        {/* ✅ موبایل: padding مناسب و text-center / دسکتاپ: padding قبلی حفظ شده با sm: */}

        <h1 className="text-lg text-gray-800  font-bold sm:text-2xl">
          {/* ✅ موبایل: text-lg / دسکتاپ: text-2xl */}
          ارائه خدمات پیشرفته در حوزه برش لیزر و ساخت تجهیزات فلزی
        </h1>

        <p
          className="mt-4 text-sm p-4 text-gray-800 leading-loose sm:text-base sm:p-8 sm:leading-loose"
          dir="rtl"
        >
          {/* ✅ موبایل: text-sm و p-4 / دسکتاپ: text-base و p-8 */}
          با بهره‌مندی از فناوری‌های روز دنیا در زمینه برش لیزر، خم‌کاری
          <span dir="ltr" className="inline-block">
            CNC
          </span>
          و طراحی صنعتی، مجموعه ما راهکارهایی دقیق، مهندسی‌شده و منطبق با
          استانداردهای صنعتی برای صنایع مختلف ارائه می‌دهد. تجربه کیفیتی متفاوت
          از خدمات فلزکاری را با ما احساس کنید.
        </p>
      </div>

      <div className=" w-full  mt-16   bg-gradient-to-b from-[#008884] to-[#f1f3ee]">
        <div
          className="w-full flex flex-col-reverse lg:flex-row justify-end lg:h-80"
          data-aos="fade-right"
          data-aos-delay="0"
        >
          {/* ✅ موبایل: flex-col-reverse (عکس بالا، متن پایین) */}
          {/* ✅ دسکتاپ: flex-row (حالت اصلی شما) */}

          {/* 🟢 متن */}
          <div className="w-full lg:flex-1 px-4 pt-6 lg:pt-0 lg:mr-6 lg:ml-8 text-justify flex flex-col justify-center items-end">
            <h2 className="mt-6 lg:mt-8 text-gray-700 text-lg lg:text-xl font-bold">
              خدمات برش لیزر فلزات
            </h2>

            <p
              className="text-justify text-right text-slate-700 mt-4"
              dir="rtl"
            >
              ما با بهره‌گیری از دستگاه‌های پیشرفته برش لیزر، امکان برش دقیق
              انواع فلزات از جمله آهن، استیل، آلومینیوم و گالوانیزه را فراهم
              کرده‌ایم. این فناوری سرعت بالا، دقت یک دهم میلیمتری و لبه‌های بدون
              پلیسه را به همراه دارد و گزینه‌ای ایده‌آل برای ساخت قطعات صنعتی،
              تزئینی و پروژه‌های سفارشی است.
            </p>
          </div>

          {/* 🟢 تصویر */}
          <div className="w-full mt-5 lg:w-2/6   mb-6 lg:mb-0 lg:mt-24 lg:mr-12">
            <img
              className="w-full h-56 lg:h-full object-cover "
              loading="lazy"
              src="/images/p1.jpg"
              alt="خدمات برش لیزر فلزات"
            />
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row-reverse justify-start lg:h-80"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          {/* ✅ موبایل: عکس بالا، متن پایین با flex-col */}
          {/* ✅ دسکتاپ: عکس سمت چپ، متن سمت راست با flex-row-reverse */}

          {/* 🟢 متن */}
          <div className="w-full lg:flex-1 px-4 pt-4 lg:pt-0 lg:ml-6 lg:mr-8 text-justify flex flex-col justify-center items-end">
            <h2 className="mt-4 lg:mt-8 text-gray-700 text-lg lg:text-xl font-bold text-right">
              خدمات خم CNC
            </h2>

            <p
              className="text-justify text-right text-slate-700 mt-4"
              dir="rtl"
            >
              با بهره‌گیری از دستگاه‌های خم{" "}
              <span dir="ltr" className="inline-block">
                CNC
              </span>{" "}
              پیشرفته، خم‌کاری دقیق و یکنواخت انواع ورق‌های فلزی با زاویه‌های
              دلخواه انجام می‌شود. این خدمات برای ساخت قطعات صنعتی، بدنه تابلو
              برق، استراکچرهای فلزی، سازه‌های مهندسی و پروژه‌های سفارشی با دقت
              بالا و سرعت اجرای مطلوب، مناسب است.
            </p>
          </div>

          {/* 🟢 تصویر */}
          <div className="w-full lg:w-2/6 px-4 lg:ml-12 mb-6 lg:mb-0 lg:mt-12">
            <img
              className="w-full h-56 lg:h-full object-cover"
              loading="lazy"
              src="/images/kham.jpg"
              alt="خدمات خم CNC"
            />
          </div>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row justify-end lg:h-80"
          data-aos="fade-right"
          data-aos-delay="0"
        >
          {/* ✅ موبایل: flex-col-reverse = عکس بالا، متن پایین */}
          {/* ✅ دسکتاپ: flex-row = طراحی شما حفظ میشه */}

          {/* 🟢 متن */}
          <div className="w-full lg:flex-1 px-4 pt-4 lg:pt-0 lg:mr-6 lg:ml-8 text-justify flex flex-col justify-center items-end">
            <h2 className="mt-4 lg:mt-8 text-gray-700 text-lg lg:text-xl font-bold text-right">
              طراحی و ساخت ماشین آلات و تجهیزات صنعتی
            </h2>

            <p
              className="text-justify text-right text-slate-700 mt-4"
              dir="rtl"
            >
              ما خدمات تخصصی در زمینه طراحی و ساخت انواع ماشین‌آلات و تجهیزات
              صنعتی را با توجه به نیاز مشتری و مشخصات فنی پروژه ارائه می‌دهیم.
              از ایده‌پردازی تا ساخت و اجرا، تمام مراحل با بهره‌گیری از
              نرم‌افزارهای مهندسی، قطعات باکیفیت و استانداردهای صنعتی انجام
              می‌شود تا کارایی، ایمنی و دوام تجهیزات تضمین گردد.
            </p>
          </div>

          {/* 🟢 تصویر */}
          <div className="w-full lg:w-2/6 px-4 lg:px-0 mb-6 lg:mb-0 lg:mt-0 lg:mr-12">
            <img
              className="w-full h-56 lg:h-full object-cover "
              loading="lazy"
              src="/images/machine.jpg"
              alt="طراحی و ساخت ماشین آلات و تجهیزات صنعتی"
            />
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row-reverse justify-start lg:h-80"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          {/* ✅ موبایل: عکس بالا، متن پایین با flex-col */}
          {/* ✅ دسکتاپ: عکس سمت چپ، متن سمت راست با flex-row-reverse */}

          {/* 🟢 متن */}
          <div className="w-full lg:flex-1 px-4 pt-4 lg:pt-0 lg:ml-6 lg:mr-8 text-justify flex flex-col justify-center items-end">
            <h2 className="mt-4 lg:mt-8 text-gray-700 text-lg lg:text-xl font-bold text-right">
              طراحی و ساخت تابلو برق
            </h2>

            <p
              className="text-justify text-right text-slate-700 mt-4"
              dir="rtl"
            >
              ما با تکیه بر دانش فنی و تجهیزات روز، انواع تابلوهای برق‌ صنعتی،
              توزیع، کنترلی و اتوماسیون را مطابق با نیاز پروژه و استانداردهای
              ایمنی طراحی و تولید می‌کنیم. این تابلوها با کیفیت ساخت بالا،
              چیدمان مهندسی‌شده و بدنه فلزی مقاوم، مناسب استفاده در صنایع مختلف،
              کارگاه‌ها و پروژه‌های ساختمانی هستند.
            </p>
          </div>

          {/* 🟢 تصویر */}
          <div className="w-full lg:w-2/6 px-4 lg:px-0 mb-6 lg:mb-0 lg:ml-12">
            <img
              className="w-full h-56 lg:h-full object-cover "
              loading="lazy"
              src="/images/tablobargh.jpg"
              alt="طراحی و ساخت تابلو برق"
            />
          </div>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row justify-end lg:h-80"
          data-aos="fade-right"
          data-aos-delay="0"
        >
          {/* ✅ موبایل: flex-col-reverse (تصویر بالا - متن پایین) */}
          {/* ✅ دسکتاپ: flex-row (حالت اصلی شما) */}

          {/* 🟢 متن */}
          <div className="w-full lg:flex-1 px-4 pt-4 lg:pt-0 lg:mr-6 lg:ml-8 text-justify flex flex-col justify-center items-end">
            <h2 className="mt-4 lg:mt-8 text-gray-700 text-lg lg:text-xl font-bold text-right">
              طراحی و ساخت پایه‌های روشنایی و برج‌های نوری
            </h2>

            <p
              className="text-justify text-right text-slate-700 mt-4"
              dir="rtl"
            >
              ما در طراحی و ساخت پایه‌های روشنایی و برج‌های نوری با استفاده از
              متریال مقاوم و استانداردهای بین‌المللی، راهکارهای کارآمد و پایدار
              برای تامین روشنایی محیط‌های صنعتی، شهری و فضای باز ارائه می‌دهیم.
              محصولات ما با دوام بالا و نصب آسان، پاسخگوی نیاز پروژه‌های بزرگ در
              حوزه تأسیسات و زیرساخت‌های نوری هستند.
            </p>
          </div>

          {/* 🟢 تصویر */}
          <div className="w-full lg:w-2/6 px-4 lg:px-0 mb-6 lg:mb-0 lg:mr-12">
            <img
              className="w-full h-56 lg:h-full object-cover "
              loading="lazy"
              src="/images/paye.jpg"
              alt="طراحی و ساخت پایه‌های روشنایی و برج‌های نوری"
            />
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row-reverse justify-start lg:h-80"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          {/* ✅ متن */}
          <div className="w-full lg:flex-1 px-4 pt-4 lg:pt-0 lg:ml-6 lg:mr-8 text-justify flex flex-col justify-center items-end">
            <h2 className="mt-4 lg:mt-8 text-gray-700 text-lg lg:text-xl font-bold text-right">
              خدمات حک لیزر فلزات
            </h2>

            <p
              className="text-justify text-right text-slate-700 mt-4"
              dir="rtl"
            >
              با استفاده از تکنولوژی حکاکی لیزری، امکان ایجاد طرح‌ها، نوشته‌ها و
              لوگوهای دقیق و ماندگار بر روی انواع فلزات مانند استیل، آلومینیوم،
              مس و برنج فراهم شده است. این روش بدون تماس فیزیکی و با دقت بالا
              انجام می‌شود و مناسب برای پلاک‌سازی صنعتی، مارک‌زنی قطعات، تولید
              هدایای تبلیغاتی و طرح‌های سفارشی است.
            </p>
          </div>
          {/* ✅ تصویر */}
          <div className="w-full lg:w-2/6 px-4 lg:px-0 mb-6 lg:mb-0 lg:ml-12">
            <img
              className="w-full h-56 lg:h-full object-cover "
              loading="lazy"
              src="/images/hak.jpg"
              alt="خدمات حک لیزر فلزات"
            />
          </div>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row justify-end lg:h-80"
          data-aos="fade-right"
          data-aos-delay="0"
        >
          {/* ✅ متن */}
          <div className="w-full lg:flex-1 px-4 pt-4 lg:pt-0 lg:mr-6 lg:ml-8 text-justify flex flex-col justify-center items-end">
            <h2 className="mt-4 lg:mt-8 text-gray-700 text-lg lg:text-xl font-bold text-right">
              طراحی و ساخت استراکچر نیروگاه خورشیدی
            </h2>

            <p
              className="text-justify text-right text-slate-700 mt-4"
              dir="rtl"
            >
              ما با بهره‌گیری از مهندسی دقیق و مواد اولیه مناسب، استراکچرهای
              ویژه نصب پنل‌های خورشیدی را متناسب با شرایط اقلیمی و نیاز
              پروژه‌های نیروگاه خورشیدی طراحی و تولید می‌کنیم. سازه‌های ما با
              توجه به مقاومت در برابر باد، بار برف و خوردگی، طول عمر و عملکرد
              بهینه سیستم‌های انرژی خورشیدی را تضمین می‌کنند.
            </p>
          </div>

          {/* ✅ تصویر */}
          <div className="w-full lg:w-2/6 px-4 lg:px-0 mb-6 lg:mb-0 lg:mr-12 pb-6 lg:pb-12">
            <img
              className="w-full h-56 lg:h-full object-cover"
              loading="lazy"
              src="/images/khorshidii.jpg"
              alt="طراحی و ساخت استراکچر نیروگاه خورشیدی"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
