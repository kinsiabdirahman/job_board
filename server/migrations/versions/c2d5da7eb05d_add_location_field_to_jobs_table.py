"""Add location field to jobs table

Revision ID: c2d5da7eb05d
Revises: 35bebee6e1c7
Create Date: 2024-04-18 23:03:02.920394

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c2d5da7eb05d'
down_revision = '35bebee6e1c7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('applications', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('job_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key('fk_applications_user_id', 'users', ['user_id'], ['id'])
        batch_op.create_foreign_key('fk_applications_job_id', 'jobs', ['job_id'], ['id'])


    with op.batch_alter_table('jobs', schema=None) as batch_op:
        batch_op.add_column(sa.Column('location', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('jobs', schema=None) as batch_op:
        batch_op.drop_column('location')

    with op.batch_alter_table('applications', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('job_id')
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###