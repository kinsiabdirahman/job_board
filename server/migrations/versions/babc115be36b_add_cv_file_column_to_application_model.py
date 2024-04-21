"""Add cv_file column to Application model

Revision ID: babc115be36b
Revises: c2d5da7eb05d
Create Date: 2024-04-21 21:44:51.215502

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'babc115be36b'
down_revision = 'c2d5da7eb05d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('applications', schema=None) as batch_op:
        batch_op.add_column(sa.Column('cv_file', sa.LargeBinary(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('applications', schema=None) as batch_op:
        batch_op.drop_column('cv_file')

    # ### end Alembic commands ###
