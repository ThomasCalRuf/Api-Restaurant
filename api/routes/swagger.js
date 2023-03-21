/* SWAGGER USER */

/**
 * @swagger
 * paths:
 *  /users:
 *    get:
 *      summary: Avoir tous les Utilisteurs
 *      description: Avoir tous les utilisateur
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *             description: Erreur de serveur lors de la récupération des users
 */

/**
 * @swagger
 * paths:
 *  /users:
 *    post:
 *      summary: Créer un Utilisateur
 *      description: Créer un utilisateur et son TipsPayment
 *      parameters:
 *       - in: body
 *         name: user
 *         description: Les informations du user.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             firstname:
 *               type: string
 *             lastname:
 *               type: string
 *             status:
 *               type: string
 *             active:
 *               type: boolean
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la création du user
 */

/**
 * @swagger
 * paths:
 *  /users/{id}:
 *    get:
 *      summary: Avoir un Utilisateur
 *      description: Avoir un Utilisateur avec son ID et son TipsPayment
 *      parameters:
 *         - in: path
 *           name: id
 *           type: integer
 *           required: true
 *           description: id de l'utilisateur
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la récupération du user
 *         '404':
 *           description: User non trouvé
 */

/**
 * @swagger
 * paths:
 *  /users/{id}:
 *    put:
 *      summary: Mettre à jour un Utilisateur
 *      description: Mettre à Jour L'utilisateur
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id de l'utilisateur
 *        - in: body
 *          name: user
 *          description: Les informations à mettre à jour du user.
 *          required: true
 *          schema:
 *           type: object
 *           properties:
 *             firstname:
 *               type: string
 *             lastname:
 *               type: string
 *             status:
 *               type: string
 *             active:
 *               type: boolean
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la mise à jour du user
 *         '404':
 *           description: User non trouvé
 */

/**
 * @swagger
 * paths:
 *  /users/{id}:
 *    delete:
 *      summary: Supprimer un Utilisateur
 *      description: Met L'utilisateur en Anonyme
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id de l'utilisateur
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la suppresion du user
 *         '404':
 *           description: User non trouvé
 */

/* SWAGGER Service */

/**
 * @swagger
 * paths:
 *  /service:
 *    get:
 *      summary: Avoir tous les Services
 *      description: Avoir tous les Services
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *             description: Erreur de serveur lors de la récupération des services
 */

/**
 * @swagger
 * paths:
 *  /service:
 *    post:
 *      summary: Créer un Service
 *      description: Créer un Service, Prend les userid qui font parti du service pour les mettre dans ServiceUser. UsersID reçoit un string "1,2,3" Attention séparer bien les id par des virgules
 *      parameters:
 *       - in: body
 *         name: user
 *         description: Les informations du service.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             shiftType:
 *               type: integer
 *             shiftClosed:
 *               type: boolean
 *             usersid:
 *               type: string
 *               example: "1,2,3"
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la création du service
 */

/**
 * @swagger
 * paths:
 *  /service/{id}:
 *    get:
 *      summary: Avoir un Service
 *      description: Avoir un Service avec son ID
 *      parameters:
 *         - in: path
 *           name: id
 *           type: integer
 *           required: true
 *           description: id du service
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la récupération du service
 *         '404':
 *           description: Service non trouvé
 */

/**
 * @swagger
 * paths:
 *  /service/{id}:
 *    put:
 *      summary: Mettre à jour un Service
 *      description: Mettre à Jour Service et ServiceUser
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id du service
 *        - in: body
 *          name: service
 *          description: Les informations du service.
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              shiftType:
 *                type: integer
 *              shiftClosed:
 *                type: boolean
 *              usersid:
 *                type: string
 *                example: "1,2,3"
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la mise à jour du service
 *         '404':
 *           description: Service non trouvé
 */

/**
 * @swagger
 * paths:
 *  /service/{id}:
 *    delete:
 *      summary: Supprimer un Service
 *      description: Supprime un Service ainsi que tous Les ServiceUser qui vont avec
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id du service
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la suppresion du user
 *         '404':
 *           description: User non trouvé
 */

/**
 * @swagger
 * paths:
 *  /endservice/{id}:
 *    put:
 *      summary: Met Fin au service
 *      description: Met Fin au service. Permet de récuperer les Tips du service et de les redistribuer Aux Utilisateur présent
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id du service
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la mise à jour du service
 *         '404':
 *           description: Service non trouvé
 */

/* SWAGGER Table */

/**
 * @swagger
 * paths:
 *  /service/{id_service}/table:
 *    get:
 *      summary: Avoir tous les Tables
 *      description: Avoir tous les Tables d'un service, avec Le nom et Le tips
 *      parameters:
 *       - in: path
 *         name: id_service
 *         type: integer
 *         required: true
 *         description: id du service
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *             description: Erreur de serveur lors de la récupération des tables du service
 */

/**
 * @swagger
 * paths:
 *  /service/{id_service}/table:
 *    post:
 *      summary: Créer un Tips sur une Table
 *      description: Créer une table Avec son nom (Si la table à le meme nom qu'une autre va chercher juste l'id de la table) et son Tips
 *      parameters:
 *       - in: path
 *         name: id_service
 *         type: integer
 *         required: true
 *         description: id du service
 *       - in: body
 *         name: user
 *         description: Les informations de la table.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             tips:
 *               type: integer
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la création de la table
 */

/**
 * @swagger
 * paths:
 *  /tips/{id}:
 *    get:
 *      summary: Avoir un Tips
 *      description: Avoir La Table ainsi que son tips
 *      parameters:
 *         - in: path
 *           name: id
 *           type: integer
 *           required: true
 *           description: id du tips
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la récupération du tips
 *         '404':
 *           description: User non trouvé
 */

/**
 * @swagger
 * paths:
 *  /tips/{id}:
 *    put:
 *      summary: Mettre à jour un Tips
 *      description: Mettre à Jour Le tips
 *      parameters:
 *        - in: path
 *         name: id_service
 *         type: integer
 *         required: true
 *         description: id du service
 *       - in: body
 *         name: tips
 *         description: Les informations de la table.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             tips:
 *               type: integer
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la mise à jour du tips
 *         '404':
 *           description: Tips non trouvé
 */

/**
 * @swagger
 * paths:
 *  /tips/{id}:
 *    delete:
 *      summary: Supprimer un Tips
 *      description: Supprime le tips mais pas la table
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id de l'utilisateur
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la suppresion du user
 *         '404':
 *           description: User non trouvé
 */
