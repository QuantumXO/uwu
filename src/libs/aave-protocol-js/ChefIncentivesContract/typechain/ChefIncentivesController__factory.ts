/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../common';
import type {
  ChefIncentivesController,
  ChefIncentivesControllerInterface,
} from './ChefIncentivesController';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint128[]',
        name: '_startTimeOffset',
        type: 'uint128[]',
      },
      {
        internalType: 'uint128[]',
        name: '_rewardsPerSecond',
        type: 'uint128[]',
      },
      {
        internalType: 'address',
        name: '_poolConfigurator',
        type: 'address',
      },
      {
        internalType: 'contract IMultiFeeDistribution',
        name: '_rewardMinter',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxMintable',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalSupply',
        type: 'uint256',
      },
    ],
    name: 'BalanceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_allocPoint',
        type: 'uint256',
      },
    ],
    name: 'addPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_allocPoints',
        type: 'uint256[]',
      },
    ],
    name: 'batchUpdateAllocPoint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'claimReceiver',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
    ],
    name: 'claimableReward',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'emissionSchedule',
    outputs: [
      {
        internalType: 'uint128',
        name: 'startTimeOffset',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'rewardsPerSecond',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_totalSupply',
        type: 'uint256',
      },
    ],
    name: 'handleAction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxMintableTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mintedTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'poolConfigurator',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'poolInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'totalSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'allocPoint',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastRewardTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'accRewardPerShare',
        type: 'uint256',
      },
      {
        internalType: 'contract IOnwardIncentivesController',
        name: 'onwardIncentives',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'poolLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'registeredTokens',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardMinter',
    outputs: [
      {
        internalType: 'contract IMultiFeeDistribution',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardsPerSecond',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'setClaimReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'contract IOnwardIncentivesController',
        name: '_incentives',
        type: 'address',
      },
    ],
    name: 'setOnwardIncentives',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'start',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'startTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalAllocPoint',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'userBaseClaimable',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'userInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardDebt',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60a06040526000600a553480156200001657600080fd5b50604051620019f2380380620019f2833981810160405260a08110156200003c57600080fd5b81019080805160405193929190846401000000008211156200005d57600080fd5b9083019060208201858111156200007357600080fd5b82518660208202830111640100000000821117156200009157600080fd5b82525081516020918201928201910280838360005b83811015620000c0578181015183820152602001620000a6565b5050505090500160405260200180516040519392919084640100000000821115620000ea57600080fd5b9083019060208201858111156200010057600080fd5b82518660208202830111640100000000821117156200011e57600080fd5b82525081516020918201928201910280838360005b838110156200014d57818101518382015260200162000133565b50505050919091016040908152602083015190830151606090930151909450919250600090506200017d620002b8565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b038086166001600160a01b0319928316179092556002805492851692909116919091179055845160001981015b6001810115620002a857600760405180604001604052808984815181106200022357fe5b60200260200101516001600160801b031681526020018884815181106200024657fe5b6020908102919091018101516001600160801b03908116909252835460018101855560009485529381902083519401805493909101518216600160801b029382166001600160801b0319909316929092171691909117905560001901620001ff565b505060805250620002bc92505050565b3390565b608051611711620002e160003980610672528061146c52806114a052506117116000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638da5cb5b116100de578063bfccff4511610097578063e20c5a8a11610071578063e20c5a8a1461051e578063e5b5349814610544578063eacdaabc14610612578063f2fde38b1461061a57610173565b8063bfccff45146104c2578063cd1a4d86146104e8578063de7e410c1461051657610173565b80638da5cb5b146103995780638e2eba09146103bd5780639a0ba2ea1461043b5780639a7b5f11146104585780639b8e5563146104b2578063be9a6555146104ba57610173565b806333287564116101305780633328756414610249578063334d0bbd1461027757806334c54230146102c3578063715018a61461038157806378e97925146103895780638d75fe051461039157610173565b8063081e3eda146101785780630f208beb1461019257806317caf6f1146101d95780631a848e01146101e157806331873e2e146101e957806332a9caba1461021d575b600080fd5b610180610640565b60408051918252519081900360200190f35b6101c0600480360360408110156101a857600080fd5b506001600160a01b0381358116916020013516610646565b6040805192835260208301919091528051918290030190f35b61018061066a565b610180610670565b61021b600480360360608110156101ff57600080fd5b506001600160a01b038135169060208101359060400135610694565b005b61021b6004803603604081101561023357600080fd5b506001600160a01b038135169060200135610867565b61021b6004803603604081101561025f57600080fd5b506001600160a01b038135811691602001351661096d565b6102946004803603602081101561028d57600080fd5b50356109d3565b60405180836001600160801b03168152602001826001600160801b031681526020019250505060405180910390f35b61021b600480360360408110156102d957600080fd5b810190602081018135600160201b8111156102f357600080fd5b82018360208201111561030557600080fd5b803590602001918460208302840111600160201b8311171561032657600080fd5b919390929091602081019035600160201b81111561034357600080fd5b82018360208201111561035557600080fd5b803590602001918460208302840111600160201b8311171561037657600080fd5b509092509050610a08565b61021b610b37565b610180610bd9565b610180610bdf565b6103a1610be5565b604080516001600160a01b039092168252519081900360200190f35b61021b600480360360408110156103d357600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156103fd57600080fd5b82018360208201111561040f57600080fd5b803590602001918460208302840111600160201b8311171561043057600080fd5b509092509050610bf4565b6103a16004803603602081101561045157600080fd5b5035610d34565b61047e6004803603602081101561046e57600080fd5b50356001600160a01b0316610d5e565b6040805195865260208601949094528484019290925260608401526001600160a01b03166080830152519081900360a00190f35b6103a1610d96565b61021b610da5565b610180600480360360208110156104d857600080fd5b50356001600160a01b0316610e10565b61021b600480360360408110156104fe57600080fd5b506001600160a01b0381358116916020013516610e22565b6103a1610ed0565b6103a16004803603602081101561053457600080fd5b50356001600160a01b0316610edf565b6105c26004803603604081101561055a57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561058457600080fd5b82018360208201111561059657600080fd5b803590602001918460208302840111600160201b831117156105b757600080fd5b509092509050610efa565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156105fe5781810151838201526020016105e6565b505050509050019250505060405180910390f35b610180611079565b61021b6004803603602081101561063057600080fd5b50356001600160a01b031661107f565b60055490565b60086020908152600092835260408084209091529082529020805460019091015482565b600a5481565b7f000000000000000000000000000000000000000000000000000000000000000081565b33600090815260066020526040902060028101546106b157600080fd5b6106b9611177565b6106c581600a54611231565b3360009081526008602090815260408083206001600160a01b038816845290915290208054600383015481156107675760018301546000906107209061071a64e8d4a5100061071487876112c7565b90611329565b9061136b565b90508015610765576001600160a01b03881660009081526009602052604090205461074b90826113ad565b6001600160a01b0389166000908152600960205260409020555b505b85835561077d64e8d4a5100061071488846112c7565b600184015584845560048401546001600160a01b031615610816576004808501546040805163ae0b537160e01b815233938101939093526001600160a01b038a81166024850152604484018a905260648401899052905191169163ae0b537191608480830192600092919082900301818387803b1580156107fd57600080fd5b505af1158015610811573d6000803e3d6000fd5b505050505b604080518781526020810187905281516001600160a01b038a169233927f526824944047da5b81071fb6349412005c5da81380b336103fbe5dd34556c776929081900390910190a350505050505050565b6001546001600160a01b0316331461087e57600080fd5b6001600160a01b038216600090815260066020526040902060020154156108a457600080fd5b6108ac611177565b600a546108b990826113ad565b600a556005805460018181019092557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b039485166001600160a01b031991821681179092556040805160a0810182526000808252602082810197885242838501908152606084018381526080850184815297845260069092529390912091518255955194810194909455516002840155925160038301555160049091018054919093169116179055565b336001600160a01b038316148061099c5750610987610be5565b6001600160a01b0316336001600160a01b0316145b6109a557600080fd5b6001600160a01b039182166000908152600c6020526040902080546001600160a01b03191691909216179055565b600781815481106109e357600080fd5b6000918252602090912001546001600160801b038082169250600160801b9091041682565b610a10611407565b6000546001600160a01b03908116911614610a60576040805162461bcd60e51b815260206004820181905260248201526000805160206116bc833981519152604482015290519081900360640190fd5b828114610a6c57600080fd5b610a7461140b565b600a5460005b84811015610b2d57600060066000888885818110610a9457fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002090506000816002015411610ad757600080fd5b610b0a858584818110610ae657fe5b90506020020135610b0483600101548661136b90919063ffffffff16565b906113ad565b9250848483818110610b1857fe5b60200291909101356001928301555001610a7a565b50600a5550505050565b610b3f611407565b6000546001600160a01b03908116911614610b8f576040805162461bcd60e51b815260206004820181905260248201526000805160206116bc833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600b5481565b60045481565b6000546001600160a01b031690565b610bfc611177565b6001600160a01b0383166000908152600960205260408120805490829055600a5490915b83811015610d2257600060066000878785818110610c3a57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002090506000816002015411610c7d57600080fd5b610c878184611231565b600060086000888886818110610c9957fe5b6001600160a01b036020918202939093013583168452838101949094525060409182016000908120918c1681529252812060038401548154919350610ce99164e8d4a510009161071491906112c7565b9050610d0c610d0583600101548361136b90919063ffffffff16565b87906113ad565b6001928301919091559450919091019050610c20565b50610d2d8583611467565b5050505050565b60058181548110610d4457600080fd5b6000918252602090912001546001600160a01b0316905081565b60066020526000908152604090208054600182015460028301546003840154600490940154929391929091906001600160a01b031685565b6002546001600160a01b031681565b610dad611407565b6000546001600160a01b03908116911614610dfd576040805162461bcd60e51b815260206004820181905260248201526000805160206116bc833981519152604482015290519081900360640190fd5b600b5415610e0a57600080fd5b42600b55565b60096020526000908152604090205481565b610e2a611407565b6000546001600160a01b03908116911614610e7a576040805162461bcd60e51b815260206004820181905260248201526000805160206116bc833981519152604482015290519081900360640190fd5b6001600160a01b038216600090815260066020526040902060020154610e9f57600080fd5b6001600160a01b03918216600090815260066020526040902060040180546001600160a01b03191691909216179055565b6001546001600160a01b031681565b600c602052600090815260409020546001600160a01b031681565b606060008267ffffffffffffffff81118015610f1557600080fd5b50604051908082528060200260200182016040528015610f3f578160200160208202803683370190505b50905060005b83811015611070576000858583818110610f5b57fe5b6001600160a01b03602091820293909301358316600081815260068352604080822060088552818320968e16835295909352919091206003840154845460028601549396509193509142118015610fb157508015155b15611020576000610fcf85600201544261136b90919063ffffffff16565b90506000610ffc600a546107148860010154610ff6600354876112c790919063ffffffff16565b906112c7565b905061101b611014846107148464e8d4a510006112c7565b85906113ad565b935050505b611048836001015461071a64e8d4a510006107148688600001546112c790919063ffffffff16565b87878151811061105457fe5b6020908102919091010152505060019093019250610f45915050565b50949350505050565b60035481565b611087611407565b6000546001600160a01b039081169116146110d7576040805162461bcd60e51b815260206004820181905260248201526000805160206116bc833981519152604482015290519081900360640190fd5b6001600160a01b03811661111c5760405162461bcd60e51b81526004018080602001828103825260268152602001806116756026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600754600b541580159061118b5750600081115b1561122e576000600760018303815481106111a257fe5b6000918252602091829020604080518082019091529101546001600160801b03808216808452600160801b9092041692820192909252600b549092506111e990429061136b565b111561122c576111f761140b565b60208101516001600160801b0316600355600780548061121357fe5b6000828152602081208201600019908101919091550190555b505b50565b816002015442116112415761122c565b815480611254575042600283015561122c565b600061126d84600201544261136b90919063ffffffff16565b90506000611292846107148760010154610ff6600354876112c790919063ffffffff16565b90506112b56112aa846107148464e8d4a510006112c7565b6003870154906113ad565b60038601555050426002840155505050565b6000826112d657506000611323565b828202828482816112e357fe5b04146113205760405162461bcd60e51b815260040180806020018281038252602181526020018061169b6021913960400191505060405180910390fd5b90505b92915050565b600061132083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611578565b600061132083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061161a565b600082820183811015611320576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b600a5460055460005b818110156114625761145a600660006005848154811061143057fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902084611231565b600101611414565b505050565b6004547f000000000000000000000000000000000000000000000000000000000000000061149582846113ad565b11156114c8576114c57f00000000000000000000000000000000000000000000000000000000000000008261136b565b91505b8115611462576114d881836113ad565b6004556001600160a01b038084166000908152600c602052604090205416806114fe5750825b600254604080516334686fad60e21b81526001600160a01b03848116600483015260248201879052600160448301529151919092169163d1a1beb491606480830192600092919082900301818387803b15801561155a57600080fd5b505af115801561156e573d6000803e3d6000fd5b5050505050505050565b600081836116045760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156115c95781810151838201526020016115b1565b50505050905090810190601f1680156115f65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161161057fe5b0495945050505050565b6000818484111561166c5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156115c95781810151838201526020016115b1565b50505090039056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220206540465b0d40e0d96b29a7786a6809458965c493f6732b4ae44644085164c564736f6c63430007060033';

type ChefIncentivesControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChefIncentivesControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChefIncentivesController__factory extends ContractFactory {
  constructor(...args: ChefIncentivesControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _startTimeOffset: PromiseOrValue<BigNumberish>[],
    _rewardsPerSecond: PromiseOrValue<BigNumberish>[],
    _poolConfigurator: PromiseOrValue<string>,
    _rewardMinter: PromiseOrValue<string>,
    _maxMintable: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChefIncentivesController> {
    return super.deploy(
      _startTimeOffset,
      _rewardsPerSecond,
      _poolConfigurator,
      _rewardMinter,
      _maxMintable,
      overrides || {}
    ) as Promise<ChefIncentivesController>;
  }
  override getDeployTransaction(
    _startTimeOffset: PromiseOrValue<BigNumberish>[],
    _rewardsPerSecond: PromiseOrValue<BigNumberish>[],
    _poolConfigurator: PromiseOrValue<string>,
    _rewardMinter: PromiseOrValue<string>,
    _maxMintable: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _startTimeOffset,
      _rewardsPerSecond,
      _poolConfigurator,
      _rewardMinter,
      _maxMintable,
      overrides || {}
    );
  }
  override attach(address: string): ChefIncentivesController {
    return super.attach(address) as ChefIncentivesController;
  }
  override connect(signer: Signer): ChefIncentivesController__factory {
    return super.connect(signer) as ChefIncentivesController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChefIncentivesControllerInterface {
    return new utils.Interface(_abi) as ChefIncentivesControllerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ChefIncentivesController {
    return new Contract(address, _abi, signerOrProvider) as ChefIncentivesController;
  }
}