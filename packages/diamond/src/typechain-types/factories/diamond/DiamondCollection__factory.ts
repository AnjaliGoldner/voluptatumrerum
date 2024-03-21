/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DiamondCollection,
  DiamondCollectionInterface,
  INiftyKitV3,
} from "../../contracts/diamond/DiamondCollection";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "address",
            name: "treasury",
            type: "address",
          },
          {
            internalType: "address",
            name: "royalty",
            type: "address",
          },
          {
            internalType: "address",
            name: "trustedForwarder",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "royaltyBps",
            type: "uint16",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "baseURI",
            type: "string",
          },
          {
            internalType: "bytes32[]",
            name: "apps",
            type: "bytes32[]",
          },
        ],
        internalType: "struct INiftyKitV3.DiamondArgs",
        name: "args",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initializationContractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "InitializationFunctionReverted",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001c9438038062001c9483398101604081905262000034916200137b565b7f45f38af8fd646bf817698fe2be76218d850d401ba88ffd7c9cd1b4f5c9a1db5a805462010000600160b01b031916336201000090810291909117918290556040805163bb4fceb960e01b815290517f45f38af8fd646bf817698fe2be76218d850d401ba88ffd7c9cd1b4f5c9a1db56936000936001600160a01b039104169163bb4fceb9916004828101926020929190829003018187875af1158015620000e0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001069190620014dd565b90506000816001600160a01b031663d104a1366040518163ffffffff1660e01b8152600401600060405180830381865afa15801562000149573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000173919081019062001598565b905060008461012001515160016200018c91906200166f565b6001600160401b03811115620001a657620001a66200117e565b604051908082528060200260200182016040528015620001f557816020015b60408051606080820183526000808352602083015291810191909152815260200190600190039081620001c55790505b5060408601516005860180546001600160a01b0319166001600160a01b03909216919091179055606083015160048601805460ff60b01b1916600160b01b60ff9093169290920291909117905561010086015190915060068501906200025c908262001714565b5060808501516008850180546001600160a01b0319166001600160a01b039092169190911790556101208501516200029a9082908690869062000328565b9050620002a8818362000562565b90506200031d818360000151876000015188602001518960c001518a60e001518b606001518c60a00151604051602401620002e9969594939291906200180e565b60408051601f198184030181529190526020810180516001600160e01b0390811663c00cf3ab60e01b179091526200064e16565b505050505062001add565b805160609060008051602062001c008339815191529060005b8181101562000556576000866001600160a01b03166342c71f1d8784815181106200037057620003706200186e565b60200260200101516040518263ffffffff1660e01b81526004016200039791815260200190565b600060405180830381865afa158015620003b5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003df919081019062001884565b9050806060015160ff16600003620004335760405162461bcd60e51b8152602060048201526012602482015271105c1c08191bd95cc81b9bdd08195e1a5cdd60721b60448201526064015b60405180910390fd5b604080516060810190915281516001600160a01b03168152602081016000815260200182604001518152508983815181106200047357620004736200186e565b602090810291909101810191909152818101516001600160e01b03191660009081526003860190915260408120805460ff19166001179055865182918a91899086908110620004c657620004c66200186e565b6020908102919091018101518252818101929092526040908101600020835181548585015160e01c600160a01b026001600160c01b03199091166001600160a01b039092169190911717815590830151805191926200052e92600185019290910190620010b4565b50606091909101516002909101805460ff191660ff9092169190911790555060010162000341565b50959695505050505050565b604080516060818101835283516001600160a01b03168252600060208301528383015192820192909252835160008051602062001c0083398151915291908590620005b09060019062001917565b81518110620005c357620005c36200186e565b60200260200101819052506000836020015151905060005b8181101562000641576001836003016000876020015184815181106200060557620006056200186e565b6020908102919091018101516001600160e01b0319168252810191909152604001600020805460ff1916911515919091179055600101620005db565b5084925050505b92915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e5460008051602062001c008339815191529061ffff811690819060009060071615620006ad5750600381901c60009081526001840160205260409020545b60005b87518110156200073d576200072f83838a8481518110620006d557620006d56200186e565b6020026020010151600001518b8581518110620006f657620006f66200186e565b6020026020010151602001518c86815181106200071757620007176200186e565b602002602001015160400151620007cf60201b60201c565b9093509150600101620006b0565b508282146200075a5760028401805461ffff191661ffff84161790555b60078216156200077d57600382901c600090815260018501602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673878787604051620007b2939291906200192d565b60405180910390a1620007c6868662000fb8565b50505050505050565b6000808060008051602062001c00833981519152905060008451116200084c5760405162461bcd60e51b815260206004820152602b60248201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660448201526a1858d95d081d1bc818dd5d60aa1b60648201526084016200042a565b600085600281111562000863576200086362001901565b03620009e0576200088e8660405180606001604052806024815260200162001c206024913962001090565b60005b8451811015620009d9576000858281518110620008b257620008b26200186e565b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c15620009555760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60448201527f6e207468617420616c726561647920657869737473000000000000000000000060648201526084016200042a565b6001600160e01b031980831660008181526020879052604090206001600160601b031960608d901b168e17905560e060058e901b811692831c199c909c1690821c179a819003620009ba5760038c901c600090815260018601602052604081209b909b555b8b620009c68162001a34565b9c50506001909301925062000891915050565b5062000fac565b6001856002811115620009f757620009f762001901565b0362000c045762000a228660405180606001604052806028815260200162001c6c6028913962001090565b60005b8451811015620009d957600085828151811062000a465762000a466200186e565b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c30810362000add5760405162461bcd60e51b815260206004820152602f60248201527f4c69624469616d6f6e644375743a2043616e2774207265706c61636520696d6d60448201526e3aba30b1363290333ab731ba34b7b760891b60648201526084016200042a565b896001600160a01b0316816001600160a01b03160362000b555760405162461bcd60e51b8152602060048201526038602482015260008051602062001be083398151915260448201527f6374696f6e20776974682073616d652066756e6374696f6e000000000000000060648201526084016200042a565b6001600160a01b03811662000bc25760405162461bcd60e51b8152602060048201526038602482015260008051602062001be083398151915260448201527f6374696f6e207468617420646f65736e2774206578697374000000000000000060648201526084016200042a565b506001600160e01b031990911660009081526020849052604090206001600160601b03919091166001600160601b031960608a901b1617905560010162000a25565b600285600281111562000c1b5762000c1b62001901565b0362000f53576001600160a01b0386161562000ca05760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260448201527f657373206d75737420626520616464726573732830290000000000000000000060648201526084016200042a565b600388901c6007891660005b865181101562000f2e5760008a900362000ced578262000ccc8162001a50565b60008181526001870160205260409020549b5093506007925062000cfd9050565b8162000cf98162001a50565b9250505b6000806000808a858151811062000d185762000d186200186e565b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c62000dba5760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e277420657869737400000000000000000060648201526084016200042a565b30606082901c0362000e265760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b60648201526084016200042a565b600587901b8f901b94506001600160e01b03198086169083161462000e78576001600160e01b03198516600090815260208a90526040902080546001600160601b0319166001600160601b0383161790555b6001600160e01b031991909116600090815260208990526040812055600381901c611fff16925060051b60e016905085821462000edf576000828152600188016020526040902080546001600160e01b031980841c19909116908516831c17905562000f03565b80836001600160e01b031916901c816001600160e01b031960001b901c198e16179c505b8460000362000f2257600086815260018801602052604081208190559c505b50505060010162000cac565b508062000f3d83600862001a6a565b62000f4991906200166f565b9950505062000fac565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b60648201526084016200042a565b50959694955050505050565b6001600160a01b03821662000fcb575050565b62000ff08260405180606001604052806028815260200162001c446028913962001090565b600080836001600160a01b0316836040516200100d919062001a84565b600060405180830381855af49150503d80600081146200104a576040519150601f19603f3d011682016040523d82523d6000602084013e6200104f565b606091505b5091509150816200108a578051156200106b5780518082602001fd5b838360405163192105d760e01b81526004016200042a92919062001aa2565b50505050565b813b81816200108a5760405162461bcd60e51b81526004016200042a919062001ac8565b82805482825590600052602060002090600701600890048101928215620011555791602002820160005b838211156200112157835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302620010de565b8015620011535782816101000a81549063ffffffff021916905560040160208160030104928301926001030262001121565b505b506200116392915062001167565b5090565b5b8082111562001163576000815560010162001168565b634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b0381118282101715620011ba57620011ba6200117e565b60405290565b604051608081016001600160401b0381118282101715620011ba57620011ba6200117e565b604051601f8201601f191681016001600160401b03811182821017156200121057620012106200117e565b604052919050565b80516001600160a01b03811681146200123057600080fd5b919050565b805161ffff811681146200123057600080fd5b60005b83811015620012655781810151838201526020016200124b565b50506000910152565b600082601f8301126200128057600080fd5b81516001600160401b038111156200129c576200129c6200117e565b620012b1601f8201601f1916602001620011e5565b818152846020838601011115620012c757600080fd5b620012da82602083016020870162001248565b949350505050565b60006001600160401b03821115620012fe57620012fe6200117e565b5060051b60200190565b600082601f8301126200131a57600080fd5b81516020620013336200132d83620012e2565b620011e5565b82815260059290921b840181019181810190868411156200135357600080fd5b8286015b8481101562001370578051835291830191830162001357565b509695505050505050565b6000602082840312156200138e57600080fd5b81516001600160401b0380821115620013a657600080fd5b908301906101408286031215620013bc57600080fd5b620013c662001194565b620013d18362001218565b8152620013e16020840162001218565b6020820152620013f46040840162001218565b6040820152620014076060840162001218565b60608201526200141a6080840162001218565b60808201526200142d60a0840162001235565b60a082015260c0830151828111156200144557600080fd5b62001453878286016200126e565b60c08301525060e0830151828111156200146c57600080fd5b6200147a878286016200126e565b60e08301525061010080840151838111156200149557600080fd5b620014a3888287016200126e565b8284015250506101208084015183811115620014be57600080fd5b620014cc8882870162001308565b918301919091525095945050505050565b600060208284031215620014f057600080fd5b620014fb8262001218565b9392505050565b80516001600160e01b0319811681146200123057600080fd5b600082601f8301126200152d57600080fd5b81516020620015406200132d83620012e2565b82815260059290921b840181019181810190868411156200156057600080fd5b8286015b848110156200137057620015788162001502565b835291830191830162001564565b805160ff811681146200123057600080fd5b600060208284031215620015ab57600080fd5b81516001600160401b0380821115620015c357600080fd5b9083019060808286031215620015d857600080fd5b620015e2620011c0565b620015ed8362001218565b81526020830151828111156200160257600080fd5b62001610878286016200151b565b6020830152506040830151828111156200162957600080fd5b62001637878286016200151b565b6040830152506200164b6060840162001586565b606082015295945050505050565b634e487b7160e01b600052601160045260246000fd5b8082018082111562000648576200064862001659565b600181811c908216806200169a57607f821691505b602082108103620016bb57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200170f57600081815260208120601f850160051c81016020861015620016ea5750805b601f850160051c820191505b818110156200170b57828155600101620016f6565b5050505b505050565b81516001600160401b038111156200173057620017306200117e565b620017488162001741845462001685565b84620016c1565b602080601f831160018114620017805760008415620017675750858301515b600019600386901b1c1916600185901b1785556200170b565b600085815260208120601f198616915b82811015620017b15788860151825594840194600190910190840162001790565b5085821015620017d05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008151808452620017fa81602086016020860162001248565b601f01601f19169290920160200192915050565b600060018060a01b038089168352808816602084015260c060408401526200183a60c0840188620017e0565b83810360608501526200184e8188620017e0565b959091166080840152505061ffff9190911660a090910152949350505050565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156200189757600080fd5b81516001600160401b0380821115620018af57600080fd5b9083019060808286031215620018c457600080fd5b620018ce620011c0565b620018d98362001218565b8152620018e96020840162001502565b60208201526040830151828111156200162957600080fd5b634e487b7160e01b600052602160045260246000fd5b8181038181111562000648576200064862001659565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b8481101562001a0257898403607f19018652815180516001600160a01b031685528381015189860190600381106200199e57634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015620019ec5783516001600160e01b0319168252928601926001929092019190860190620019c0565b5097850197955050509082019060010162001956565b50506001600160a01b038a1690880152868103604088015262001a268189620017e0565b9a9950505050505050505050565b60006001820162001a495762001a4962001659565b5060010190565b60008162001a625762001a6262001659565b506000190190565b808202811582820484141762000648576200064862001659565b6000825162001a9881846020870162001248565b9190910192915050565b6001600160a01b0383168152604060208201819052600090620012da90830184620017e0565b602081526000620014fb6020830184620017e0565b60f48062001aec6000396000f3fe608060405236600a57005b600080356001600160e01b03191681527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6020819052604090912054819060601c80609b5760405162461bcd60e51b815260206004820181905260248201527f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f74206578697374604482015260640160405180910390fd5b3660008037600080366000845af43d6000803e80801560b9573d6000f35b3d6000fdfea26469706673582212204b2e85355e1937888a78adb1bf744ba88839710c17cc2e5676456a66b46bb8ab64736f6c634300081300334c69624469616d6f6e644375743a2043616e2774207265706c6163652066756ec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465";

type DiamondCollectionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondCollectionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondCollection__factory extends ContractFactory {
  constructor(...args: DiamondCollectionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    args: INiftyKitV3.DiamondArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondCollection> {
    return super.deploy(args, overrides || {}) as Promise<DiamondCollection>;
  }
  override getDeployTransaction(
    args: INiftyKitV3.DiamondArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(args, overrides || {});
  }
  override attach(address: string): DiamondCollection {
    return super.attach(address) as DiamondCollection;
  }
  override connect(signer: Signer): DiamondCollection__factory {
    return super.connect(signer) as DiamondCollection__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondCollectionInterface {
    return new utils.Interface(_abi) as DiamondCollectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondCollection {
    return new Contract(address, _abi, signerOrProvider) as DiamondCollection;
  }
}