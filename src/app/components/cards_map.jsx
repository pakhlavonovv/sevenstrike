'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../../../firebase-user';
import LoadingCards from './loading_cards';
import Link from 'next/link';

const CardsMap = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchAccounts() {
            try {
                setLoading(true);
                const accountsRef = collection(db, 'accounts');
                const snapshot = await getDocs(accountsRef);
                const accountsList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                if (accountsList.length === 0) {
                    throw new Error("Нет аккаунтов!");
                }
                setAccounts(accountsList);
            } catch (error) {
                console.log(error);
                setError("Ошибка при загрузке данных!");
            } finally {
                setLoading(false);
            }
        }
        fetchAccounts();
    }, []);

    if (loading) return <LoadingCards />;

    return (
       <div className="mx-auto w-[98%] mt-[20px] sm:mt-[50px] sm:w-[95%] lg:w-[80%] px-1">
  <h1 className="text-[24px] text-center sm:text-start font-bold sm:text-[28px] lg:text-[32px] mb-8">
    Аккаунты
  </h1>

  {error && (
    <div className="text-[#935F4C] px-4 py-3 rounded relative mb-4 text-center">
      {error}
    </div>
  )}

  <div className="flex flex-col gap-6">
    {accounts.map((account) => (
     <div
  key={account.id}
  className="flex flex-col sm:flex-row bg-[#1e1e1e] rounded-xl shadow-md hover:shadow-xl transition"
>
  <div className="w-full sm:w-[250px] h-[200px]">
    {account.image ? (
      <Image
        src={account.image}
        alt={account.name}
        width={250}
        height={200}
        className="rounded-t-xl sm:rounded-l-xl sm:rounded-t-none object-cover w-full h-full"
      />
    ) : (
      <div className="text-gray-500 flex items-center justify-center w-full h-full bg-[#2a2a2a] rounded-t-xl sm:rounded-l-xl sm:rounded-t-none">
        Нет изображения
      </div>
    )}
  </div>

  <div className="flex flex-col justify-between gap-2 text-white p-4 w-full h-full">
    <div>
      <h3 className="text-[22px] font-bold">{account.name}</h3>
      <h4 className="text-[18px] text-gray-300">{account.game}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{account.description}</p>
      <p className="font-bold text-[18px] text-[#f97316]">{account.price}$</p>
    </div>

    <Link
      href={account.sellerContact}
      target="_blank"
      className="text-white flex items-center hover:underline justify-center rounded-md text-[13px] sm:text-[16px] bg-[#4AC0FF] py-2 hover:bg-[#38aee6] transition font-medium"
    >
      Связаться с продавцом
    </Link>
  </div>
</div>

    ))}
  </div>
</div>


    );
};

export default CardsMap;
