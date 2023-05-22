'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('questions', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            question: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            deleted_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: null,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('questions');
    }
};
