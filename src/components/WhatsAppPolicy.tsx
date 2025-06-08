import React from 'react';

interface WhatsAppPolicyProps {
  isArabic: boolean;
}

export const WhatsAppPolicy: React.FC<WhatsAppPolicyProps> = ({ isArabic }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{isArabic ? 'سياسة استخدام واتساب' : 'WhatsApp Usage Policy'}</h1>
        
        <div className="space-y-6">
          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{isArabic ? 'الغرض من السياسة' : 'Purpose of this Policy'}</h2>
            <p className="mb-4">
              {isArabic 
                ? 'تهدف هذه السياسة إلى توضيح كيفية استخدامنا لواتساب للتواصل مع عملائنا والرد على استفساراتهم بطريقة آمنة وفعالة.'
                : 'This policy is designed to clarify how we use WhatsApp to communicate with our customers and respond to inquiries in a secure and effective manner.'}
            </p>
            <p>
              {isArabic
                ? 'نحن نلتزم بحماية خصوصية بياناتك وفقًا لسياسات واتساب وقوانين حماية البيانات المعمول بها.'
                : 'We are committed to protecting your data privacy in accordance with WhatsApp policies and applicable data protection laws.'}
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{isArabic ? 'كيفية استخدامنا لواتساب' : 'How We Use WhatsApp'}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                {isArabic
                  ? 'التواصل مع العملاء حول الاستفسارات والطلبات'
                  : 'Communication with customers about inquiries and requests'}
              </li>
              <li>
                {isArabic
                  ? 'تقديم الدعم والمساعدة للعملاء'
                  : 'Providing support and assistance to customers'}
              </li>
              <li>
                {isArabic
                  ? 'إرسال تحديثات حول مشاريعنا وخدماتنا (بموافقتك)'
                  : 'Sending updates about our projects and services (with your consent)'}
              </li>
              <li>
                {isArabic
                  ? 'الرد على الاستفسارات التقنية والأسئلة الشائعة'
                  : 'Responding to technical inquiries and frequently asked questions'}
              </li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{isArabic ? 'خصوصية البيانات' : 'Data Privacy'}</h2>
            <p className="mb-4">
              {isArabic
                ? 'نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. لن نقوم بمشاركة رقم هاتفك أو محتوى محادثاتك مع أطراف ثالثة دون موافقتك الصريحة، إلا إذا كان ذلك مطلوباً بموجب القانون.'
                : 'We respect your privacy and are committed to protecting your personal data. We will not share your phone number or the content of your conversations with third parties without your explicit consent, unless required by law.'}
            </p>
            <p>
              {isArabic
                ? 'تتم جميع المحادثات عبر واتساب باستخدام التشفير من طرف إلى طرف وفقاً لسياسات واتساب.'
                : 'All conversations via WhatsApp are conducted using end-to-end encryption in accordance with WhatsApp policies.'}
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{isArabic ? 'الانسحاب' : 'Opting Out'}</h2>
            <p>
              {isArabic
                ? 'يمكنك في أي وقت اختيار عدم تلقي رسائل منا عبر واتساب. ما عليك سوى إرسال رسالة تفيد برغبتك في إلغاء الاشتراك، وسنحترم طلبك على الفور.'
                : 'You can choose to stop receiving messages from us via WhatsApp at any time. Simply send a message indicating your wish to unsubscribe, and we will respect your request immediately.'}
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{isArabic ? 'التواصل معنا' : 'Contact Us'}</h2>
            <p>
              {isArabic
                ? 'إذا كانت لديك أي أسئلة أو استفسارات حول سياسة استخدام واتساب، يرجى التواصل معنا عبر البريد الإلكتروني أو نموذج الاتصال على موقعنا.'
                : 'If you have any questions or concerns about our WhatsApp usage policy, please contact us via email or through the contact form on our website.'}
            </p>
          </section>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          <p>{isArabic ? 'آخر تحديث: 8 يونيو 2025' : 'Last updated: June 8, 2025'}</p>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPolicy;
