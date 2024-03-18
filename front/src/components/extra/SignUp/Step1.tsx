import Container from '@/components/global/Container'
import React from 'react'
import PineconeHeader from './PineconeHeader'
import Steps from './Steps'
import HeaderTitle from './HeaderTitle'
import CustomInput from '@/components/global/CustomInput'
import NextButton from './NextButton'
import PineconeFooter from './PineconeFooter'

const Step1 = () => {
  return (
    <Container>
      <PineconeHeader />
      <Steps step={1}/>
      <main className="w-[452px] p-6 rounded-xl bg-white h-fit flex flex-col">
        <HeaderTitle title="Дэлгүүрийн мэдээлэл" textCenter="left" />
        <CustomInput
          label="Танай дэлгүүрийн нэр юу вэ?"
          question="Дэлгүүрийн нэр"
        />
        <NextButton />
      </main>
      <PineconeFooter />
    </Container>
  )
}

export default Step1
