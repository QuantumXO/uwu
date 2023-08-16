// {columns?.map((item, itemIndex) => {
//     return (
//     <div className="ClaimbelRewardsList" key={`${columnIndex}-${itemIndex}`}>
//         <div className="ClaimbelRewardsList__icon">
//         <TokenIcon tokenSymbol={''} height={0} width={0} />
//         </div>
//         <div className="ClaimbelRewardsList__info">
//         <div className="ClaimbelRewardsList__symbol">{item.symbol}</div>
//         <div className="ClaimbelRewardsList__label">
//             <Value
//             value={item.label}
//             maximumValueDecimals={2}
//             minimumValueDecimals={2}
//             color="white"
//             />

//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//             {item.usdVal >= 0.01 && (
//                 <div
//                 style={{ color: 'rgba(255, 255, 255, 0.6)', marginRight: 2 }}
//                 >
//                 $
//                 </div>
//             )}
//             <Value
//                 value={item.usdVal}
//                 minimumValueDecimals={2}
//                 maximumValueDecimals={2}
//                 color="lightWhite"
//             />
//             </div>
//         </div>

//         <DefaultButton
//             className="TableButtonCol__claim-button"
//             title={'Claim'}
//             onClick={async (event) => {
//             event.stopPropagation();
//             event.preventDefault();

//             if (
//                 currentMarketData.addresses.UWU_TOKEN &&
//                 currentMarketData.addresses.MULTI_FEE_DISTRIBUTION
//             ) {
//                 const multiFeeDistributionService =
//                 new MultiFeeDistributionService(
//                     getProvider(chainId),
//                     currentMarketData.addresses.UWU_TOKEN,
//                     version === 'v2'
//                     ? currentMarketData.addresses.MULTI_FEE_DISTRIBUTION
//                     : currentMarketData.addresses.MULTI_FEE_DISTRIBUTION_V1
//                 );
//                 const txGetter = await multiFeeDistributionService.getReward(
//                 user.id,
//                 [item.token]
//                 );

//                 return sendEthTransaction(txGetter, provider, () => {}, null, {
//                 onConfirmation: () => {
//                     setStatsRerender(Math.random());
//                 },
//                 });
//             } else {
//                 throw new Error(
//                 'please set UWU_TOKEN and MULTI_FEE_DISTRIBUTION'
//                 );
//             }
//             }}
//         />
//         </div>
//     </div>
//     );
// })}