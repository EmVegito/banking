import Link from 'next/link'

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content"></div>
      </Link>
    </div>
  )
}
export default BankCard
