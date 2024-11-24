import React from "react";
import FAQView from "./faqComponent";

const FAQ: React.FC = () => {

  return (
    <div className="md:my-[12.15vw]">
      <h1 className="flex justify-center text-[5.11vw] md:text-[2.23vw] font-poppinsmedium">
        FAQ
      </h1>
      <div className="mt-[5.133vw]">
        <FAQView
          question={"What is liquid staking?"}
          answer={
            "Liquid staking lets users stake their assets while keeping them accessible. For example, by staking SUI with Alpha, you receive stSUI—a ‘liquid’ token representing your staked assets. You can still trade or use stSUI in DeFi activities, earning rewards without locking up your SUI."
          }
        />
        <FAQView
          question={"How do I get my staking rewards?"}
          answer={
            "Liquid staking lets users stake their assets while keeping them accessible. For example, by staking SUI with Alpha, you receive stSUI—a ‘liquid’ token representing your staked assets. You can still trade or use stSUI in DeFi activities, earning rewards without locking up your SUI."
          }
        />
        <FAQView
          question={"How are staking rewards calculated with stSUI?"}
          answer={
            "Liquid staking lets users stake their assets while keeping them accessible. For example, by staking SUI with Alpha, you receive stSUI—a ‘liquid’ token representing your staked assets. You can still trade or use stSUI in DeFi activities, earning rewards without locking up your SUI."
          }
        />
        <FAQView
          question={"Is stSUI safe?"}
          answer={
            "Liquid staking lets users stake their assets while keeping them accessible. For example, by staking SUI with Alpha, you receive stSUI—a ‘liquid’ token representing your staked assets. You can still trade or use stSUI in DeFi activities, earning rewards without locking up your SUI."
          }
        />
        <FAQView
          question={`What happens to my staked SUI if I decide to\n
                 unstake my stSUI tokens?`}
          answer={
            "Liquid staking lets users stake their assets while keeping them accessible. For example, by staking SUI with Alpha, you receive stSUI—a ‘liquid’ token representing your staked assets. You can still trade or use stSUI in DeFi activities, earning rewards without locking up your SUI."
          }
        />
      </div>
    </div>
  );
};

export default FAQ;
