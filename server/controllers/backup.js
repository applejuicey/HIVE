// const { User, Authority, GeneralInformation, Experience, Publication, Customization } = require('../models/index');
// const { filterArrayBySpecifiedKeys, getType } = require('../utils/index');
//
// const getAttributesArray = function (includeAttributes) {
//   return getType(includeAttributes) === 'Array' ? filterArrayBySpecifiedKeys(includeAttributes, User.defaultAccessibleFieldsKeyNamesArray) : [];
// };
// const getIncludeArray = function (includeAttributes) {
//   return [
//     {
//       model: Authority,
//       as: 'authority',
//       attributes: getType(includeAttributes) === 'Array' ? filterArrayBySpecifiedKeys(includeAttributes, Authority.defaultAccessibleFieldsKeyNamesArray) : [],
//     },
//     {
//       model: GeneralInformation,
//       as: 'generalInformation',
//       attributes: getType(includeAttributes) === 'Array' ? filterArrayBySpecifiedKeys(includeAttributes, GeneralInformation.defaultAccessibleFieldsKeyNamesArray) : [],
//     },
//     {
//       model: Experience,
//       as: 'experiences',
//       attributes: getType(includeAttributes) === 'Array' ? filterArrayBySpecifiedKeys(includeAttributes, Experience.defaultAccessibleFieldsKeyNamesArray) : [],
//     },
//     {
//       model: Publication,
//       as: 'publications',
//       attributes: getType(includeAttributes) === 'Array' ? filterArrayBySpecifiedKeys(includeAttributes, Publication.defaultAccessibleFieldsKeyNamesArray) : [],
//     },
//     {
//       model: Customization,
//       as: 'customizations',
//       attributes: getType(includeAttributes) === 'Array' ? filterArrayBySpecifiedKeys(includeAttributes, Customization.defaultAccessibleFieldsKeyNamesArray) : [],
//     },
//   ];
// };
//
// const getAllUsers = async function(offset, limit, includeAttributes) {
//   return User.findAndCountAll({
//     distinct: true,
//     offset: getType(offset) === 'Number' ? Math.round(offset) : 0,
//     limit: getType(limit) === 'Number' ? Math.round(limit) : 0,
//     attributes: getAttributesArray(includeAttributes),
//     include: getIncludeArray(includeAttributes),
//   });
// };
//
// const getOneUser = async function(where, includeAttributes) {
//   return User.findOne({
//     where: getType(where) === 'Object'? where : {},
//     attributes: getAttributesArray(includeAttributes),
//     include: getIncludeArray(includeAttributes),
//   });
// };
//
// const createUser = async function(newUser) {
//   const createdUser = await User.create(
//       getType(newUser) === 'Object'? newUser : {},
//       {
//         fields: User.writableFieldsKeyNamesArray
//       }
//   );
//   console.log('aab',createdUser.setAuthority)
//   await createdUser.createAuthority(
//       getType(newUser.authority) === 'Object'? newUser.authority : {},
//       {
//         fields: Authority.writableFieldsKeyNamesArray
//       }
//   );
//   await createdUser.createGeneralInformation(
//       getType(newUser.generalInformation) === 'Object'? newUser.generalInformation : {},
//       {
//         fields: GeneralInformation.writableFieldsKeyNamesArray
//       }
//   );
//   if (getType(newUser.experiences) === 'Array') {
//     for (let experience of newUser.experiences) {
//       await createdUser.createExperience(
//           getType(experience) === 'Object'? experience : {},
//           {
//             fields: Experience.writableFieldsKeyNamesArray
//           }
//       );
//     }
//   }
//   if (getType(newUser.publications) === 'Array') {
//     for (let publication of newUser.publications) {
//       await createdUser.createPublication(
//           getType(publication) === 'Object'? publication : {},
//           {
//             fields: Publication.writableFieldsKeyNamesArray
//           }
//       );
//     }
//   }
//   if (getType(newUser.customizations) === 'Array') {
//     for (let customization of newUser.customizations) {
//       await createdUser.createCustomization(
//           getType(customization) === 'Object'? customization : {},
//           {
//             fields: Customization.writableFieldsKeyNamesArray
//           }
//       );
//     }
//   }
//   // console.log('createdUser:', createdUser.get({ plain: true }));
//   return createdUser;
// };
//
// const updateUser = async function(where, newUserInformation) {
//   await User.update(
//       getType(newUserInformation) === 'Object'? newUserInformation : {},
//       {
//         where: where,
//         fields: User.writableFieldsKeyNamesArray,
//       }
//   );
//   const targetUser = await User.findOne({
//     where: where,
//     include: [
//       {
//         model: Authority,
//         as: 'authority',
//         attributes: ['authorityCanCreateArticle', 'authorityUserUUID', 'authorityIsAdmin'],
//       },
//     ]
//   });
//   console.log('ssssfs',targetUser.toJSON())
//   console.log('zzz',newUserInformation.authority)
//   console.log('aaa',targetUser.authority.authorityUserUUID)
//   const authority = Authority.build({
//     authorityIsAdmin: newUserInformation.authority.authorityIsAdmin,
//     authorityCanCreateArticle: newUserInformation.authority.authorityCanCreateArticle,
//     authorityUserUUID: targetUser.authority.authorityUserUUID
//   });
//   targetUser.setAuthority(authority);
//   // {
//   //   fields: ['authorityCanCreateArticle']
//   // }
//   // await targetUser.updateAuthority(
//   //     {
//   //       authorityCanCreateArticle: true,
//   //       authorityIsAdmin: false,
//   //     },
//   //     {
//   //       fields: ['authorityCanCreateArticle']
//   //     }
//   // );
//   console.log('over')
//   // await targetUser.setAuthority(
//   //     getType(newUserInformation.authority) === 'Object'? newUserInformation.authority : {},
//   //     {
//   //       fields: Authority.writableFieldsKeyNamesArray
//   //     }
//   // );
//   await targetUser.setGeneralInformation(
//       getType(newUserInformation.generalInformation) === 'Object'? newUserInformation.generalInformation : {},
//       {
//         fields: GeneralInformation.writableFieldsKeyNamesArray
//       }
//   );
//   if (getType(newUserInformation.experiences) === 'Array') {
//     for (let experience of newUserInformation.experiences) {
//       await targetUser.setExperience(
//           getType(experience) === 'Object'? experience : {},
//           {
//             fields: Experience.writableFieldsKeyNamesArray
//           }
//       );
//     }
//   }
//   if (getType(newUserInformation.publications) === 'Array') {
//     for (let publication of newUserInformation.publications) {
//       await targetUser.setPublication(
//           getType(publication) === 'Object'? publication : {},
//           {
//             fields: Publication.writableFieldsKeyNamesArray
//           }
//       );
//     }
//   }
//   if (getType(newUserInformation.customizations) === 'Array') {
//     for (let customization of newUserInformation.customizations) {
//       await targetUser.setCustomization(
//           getType(customization) === 'Object'? customization : {},
//           {
//             fields: Customization.writableFieldsKeyNamesArray
//           }
//       );
//     }
//   }
//   // console.log('user:', user.get({ plain: true }));
//   // console.log('authority:', authority.get({ plain: true }));
//   return targetUser;
// };
//
// const deleteUser = async function(reqParams) {
//   return User.destroy({
//     where: {
//       id: reqParams.userID
//     },
//   });
// };
//
// module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };