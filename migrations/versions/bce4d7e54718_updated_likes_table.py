"""updated likes table

Revision ID: bce4d7e54718
Revises: b3d286786ee7
Create Date: 2021-03-22 16:54:44.447474

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bce4d7e54718'
down_revision = 'b3d286786ee7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_foreign_key(None, 'likes', 'users', ['userId'], ['id'])
    op.create_foreign_key(None, 'likes', 'posts', ['postId'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'likes', type_='foreignkey')
    op.drop_constraint(None, 'likes', type_='foreignkey')
    # ### end Alembic commands ###