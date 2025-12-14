import { Form, Input, Select, Button, message, Checkbox } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ContactRequest } from './types';
import { postContact } from '../../../../api/contact.ts';
import styles from './styles.module.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const [preferredMethod, setPreferredMethod] = useState<'phone' | 'telegram' | 'email'>('phone');

  const onFinish = async (values: ContactRequest) => {
    try {
      await postContact(values);

      message.success(t('contact.formSuccess'));
      form.resetFields();
      setPreferredMethod('phone');
    } catch {
      message.error(t('contact.formError'));
    }
  };

  const [form] = Form.useForm<ContactRequest>();

  return (
    <>
      <div className={styles.contactFormPage}>
        <hr className={styles.contactFormMobHr} />
        <div className="container">
          <hr className={styles.contactFormDecstopHr} />
          <Form<ContactRequest>
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={true}
            className={styles.contactForm}
          >
            <Form.Item
              label={t('contact.fullName')}
              name="fullName"
              rules={[{ required: true, message: t('contact.required') }]}
            >
              <Input placeholder={t('contact.fullName')} />
            </Form.Item>

            <Form.Item
              label={t('contact.phone')}
              name="phone"
              rules={[
                { required: true, message: t('contact.required') },
                { pattern: /^\+?\d{7,15}$/, message: t('contact.invalidPhone') },
              ]}
            >
              <Input placeholder="+374" />
            </Form.Item>

            <Form.Item
              label={t('contact.email')}
              name="email"
              dependencies={['preferredContact']}
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const isEmailSelected = getFieldValue('preferredContact') === 'email';

                    if (isEmailSelected && !value) {
                      return Promise.reject(t('contact.required'));
                    }

                    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                      return Promise.reject(t('contact.invalidEmail'));
                    }

                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input placeholder="example@mail.com" />
            </Form.Item>

            <Form.Item
              label={t('contact.preferredContact')}
              name="preferredContact"
              initialValue="phone"
              rules={[{ required: true, message: t('contact.required') }]}
            >
              <Select
                onChange={value => setPreferredMethod(value)}
                className={styles.contactFormSelect}
              >
                <Select.Option value="phone">{t('contact.phone')}</Select.Option>
                <Select.Option value="telegram">{t('contact.telegram')}</Select.Option>
                <Select.Option value="email">{t('contact.email')}</Select.Option>
              </Select>
            </Form.Item>

            {preferredMethod === 'telegram' && (
              <Form.Item
                label={t('contact.telegramUsername')}
                name="telegram"
                rules={[{ required: true, message: t('contact.required') }]}
              >
                <Input placeholder="@username" />
              </Form.Item>
            )}

            <Form.Item
              label={t('contact.topic')}
              name="topic"
              rules={[{ required: true, message: t('contact.required') }]}
            >
              <Select placeholder={t('contact.selectTopic')} className={styles.contactFormSelect}>
                <Select.Option value="general">{t('contact.topicGeneral')}</Select.Option>
                <Select.Option value="booking">{t('contact.topicBooking')}</Select.Option>
                <Select.Option value="repair">{t('contact.topicRepair')}</Select.Option>
                <Select.Option value="custom">{t('contact.topicCustom')}</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={t('contact.message')}
              name="message"
              rules={[{ required: true, message: t('contact.required') }]}
            >
              <Input.TextArea rows={4} placeholder={t('contact.typeMessage')} />
            </Form.Item>

            <Form.Item
              name="consent"
              valuePropName="checked"
              rules={[{ required: true, message: t('contact.consentRequired') }]}
            >
              <Checkbox className={styles.customCheckbox}>{t('contact.consentText')}</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button className={styles.contactFormButton} type="primary" htmlType="submit">
                {t('contact.submit')}
              </Button>
            </Form.Item>
          </Form>{' '}
          <hr className={styles.contactFormDecstopHr} />
        </div>
        <hr className={styles.contactFormMobHr} />
      </div>
    </>
  );
};

export default ContactForm;
