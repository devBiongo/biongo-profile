'use client';

import { useState } from 'react';
import CryptoJS from 'crypto-js';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { SecretKeyDialog } from '@/components/secure/dialogs/secret-key-dialog';
import { Textarea } from '@/components/ui/textarea';
import toast from 'react-hot-toast';

export default function Page() {
  const [text, setText] = useState('');
  const [key, setKey] = useState(localStorage.getItem('myKey') || '');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('encrypt');
  const [method, setMethod] = useState('AES');

  const handleEncryptDecrypt = () => {
    setResult('');
    if (!key) {
      toast.error('请先设置秘钥');
      return;
    }

    if (!text) {
      toast.error('请输入你想要加密的内容');
      return;
    }
    try {
      if (mode === 'encrypt') {
        if (method === 'AES') {
          setResult(CryptoJS.AES.encrypt(text, key).toString());
        } else if (method === 'DES') {
          setResult(CryptoJS.DES.encrypt(text, key).toString());
        }
      } else if (mode === 'decrypt') {
        if (method === 'AES') {
          const bytes = CryptoJS.AES.decrypt(text, key);
          setResult(bytes.toString(CryptoJS.enc.Utf8));
        } else if (method === 'DES') {
          const bytes = CryptoJS.DES.decrypt(text, key);
          setResult(bytes.toString(CryptoJS.enc.Utf8));
        }
      }
    } catch (error) {
      setResult('Error: Invalid encryption or decryption.');
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(result)
      .then(() => {
        toast.success('Text copied!');
      })
      .catch((err) => {
        toast.error('Failed to copy text');
        console.error(err);
      });
  };

  return (
    <div className="border bg-white p-4 rounded-md flex flex-col gap-3">
      <div className="flex gap-3">
        <SecretKeyDialog secret={key} setSecret={setKey} />
        <Select value={mode} onValueChange={(value) => setMode(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="encrypt">Encrypt</SelectItem>
            <SelectItem value="decrypt">Decrypt</SelectItem>
          </SelectContent>
        </Select>

        <Select value={method} onValueChange={(value) => setMethod(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AES">AES</SelectItem>
            <SelectItem value="DES">DES</SelectItem>
          </SelectContent>
        </Select>
        <Button
          onClick={handleEncryptDecrypt}
          variant={mode !== 'encrypt' ? 'outline' : 'default'}
        >
          {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}
        </Button>
      </div>

      <Textarea
        rows={4}
        placeholder="Type your message here."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border"
      />
      {result && (
        <div>
          <Button
            variant="outline"
            onClick={() => {
              handleCopy();
            }}
          >
            {result}
          </Button>
        </div>
      )}
    </div>
  );
}
